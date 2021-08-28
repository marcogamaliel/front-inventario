import React, { useEffect, useState } from "react"
import "./ver-detalle-producto.view.css"
import { useParams } from 'react-router-dom'
import ProductRepository from "../../repositories/product/product-repository"
import QrCodeRepository from "../../repositories/qr-code/qr-code.repository"
import Loader from "../../components/loader/loader.component"
import DetailData from "../../components/detail-data/detail-data.component"

export function VerProductoDetalleView() {
  const { id } = useParams()

  const [loader, setLoader] = useState(0)
  const [product, setProduct] = useState({})
  const [qr, setQr] = useState(null)

  useEffect(() => {
    setLoader(3)
    ProductRepository.getById(id).then((product) => {
      setProduct(product)
      setLoader(loader - 1)
    })
    QrCodeRepository.getByProductId(id).then((qr) => {
      setQr(qr)
      setLoader(loader - 1)
    })
  }, [])

  const userName = `${product.user?.firstName ?? ''}${product.user?.lastName ? ` ${product.user.lastName}` : ''}`

  const detailData = [
    [<b>Usuario: </b>, userName],
  ]

  return (
    <div className="container ver-detalle-producto-view">
      <Loader isLoading={loader > 0} />
      <div className="title-wrapper">
        <h1>Detalle {product?.tag ?? 'Producto'}</h1>
      </div>

      <div className="row principal-detail-product">
        <div className="col s5 m3">
          <img src={qr?.qrCode} alt={product.name} />
        </div>
        <div className="col s7 m9">
          <h2>{product.name}</h2>
          <div className="product-serial-number">{product.serialNumber}</div>
          <div>{product.state?.name}</div>
        </div>
      </div>


      <DetailData data={detailData}></DetailData>

      <div className="border-wrap">
        <h2>Importante</h2>
        <div>En caso de encontrar este equipo, por favor contactarse vía WhatsApp con nostros para su devolución, gracias!</div>
        <div>
          <a className="whatsapp-btn" href="https://wa.me/56948452530/?text=hola"><img src="/whatsapp.png" alt="what" /> Enviar Mensaje </a>
        </div>
      </div>
    </div>
  )
}