import React, { useEffect, useState } from "react"
import "./ver-producto.view.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductRepository from "../../repositories/product/product-repository"
import EventRepository from "../../repositories/event/event.repository"
import QrCodeRepository from "../../repositories/qr-code/qr-code.repository"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import Loader from "../../components/loader/loader.component"
import DetailData from "../../components/detail-data/detail-data.component"
import { EventWidget } from "../../components/event-widget/event-widget.component"

export function VerProductoView() {
  const { id } = useParams()
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [product, setProduct] = useState({})
  const [events, setEvents] = useState([])
  const [qr, setQr] = useState(null)

  useEffect(() => {
    setLoader(3)
    ProductRepository.getById(id).then((product) => {
      setProduct(product)
      setLoader(loader - 1)
    })
    EventRepository.getByProductId(id).then((events) => {
      setEvents(events)
      setLoader(loader - 1)
    })
    QrCodeRepository.getByProductId(id).then((qr) => {
      setQr(qr)
      setLoader(loader - 1)
    })
  }, [])

  const userName = `${product.user?.firstName ?? ''}${product.user?.lastName ? ` ${product.user.lastName}` : ''}`

  const detailData = [
    [<b>Id: </b>, product.id],
    [<b>Fecha de adquisicón: </b>, product.acquisitionDate],
    [<b>Proveedor: </b>, product.supplier],
    [<b>Factura: </b>, product.invoice],
    [<b>Fecha expiración garantía: </b>, product.warrantyExpirationDate],
    [<b>Costo: </b>, product.value?.amount],
    [<b>Usuario: </b>, userName],
    [<b>Fecha de asignación: </b>, product.assignmentDate],
    [<b>Condición: </b>, product.condition?.name],
  ]

  return (
    <div className="container">
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <div className="title-wrapper">
        <h1>Detalle {product?.tag ?? 'Producto'}</h1>

        <div className="tools">
          <Link to={`/editar-producto/${product?.id}`} className="btn waves-effect waves-light peanut-white">
            <i className="material-icons right">edit</i>
            Editar
          </Link>
          <button className="btn peanut">
            <i className="material-icons right">file_download</i>
            Descargar PDF
          </button>
        </div>
      </div>

      <div className="row principal-detail-product">
        <div className="col s5 m3">
          <img src={qr?.qrCode} alt={product.name} />
          <Link to="#descargar-qr" className="descargar-qr">
            <i className="material-icons right">file_download</i>
            Descargar QR
          </Link>
        </div>
        <div className="col s7 m9">
          <h2>{product.name}</h2>
          <div className="product-serial-number">{product.serialNumber}</div>
          <div>{product.state?.name}</div>
        </div>
      </div>

      <a href="https://wa.me/56948452530/?text=hola">whatsapp</a>

      <DetailData data={detailData}></DetailData>
      <EventWidget events={events}></EventWidget>
    </div>
  )
}