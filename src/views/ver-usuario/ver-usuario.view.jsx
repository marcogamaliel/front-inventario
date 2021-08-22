import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductRepository from '../../repositories/product/product-repository'
import UserRepository from "../../repositories/user/user.repository"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import Loader from "../../components/loader/loader.component"
import Table from '../../components/table/table.component'
import { EventWidget } from "../../components/event-widget/event-widget.component"
import EventRepository from "../../repositories/event/event.repository"

export function VerUsuarioView() {
  const { id } = useParams()
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])
  const [events, setEvents] = useState([])

  const productTableHeaders = ['Id', 'Nombre', 'Tag', 'Número de serie', 'Fecha de adquisicón', 'Proveedor', 'Factura', 'Fecha expiración garantía', 'Costo', 'Usuario', 'Fecha de asignación', 'Condición', 'Estado']

  useEffect(() => {
    setLoader(3)
    UserRepository.getById(id).then((user) => {
      setUser(user)
      setLoader(loader - 1)
    })
    ProductRepository.getByUserId(id).then((products) => {
      const data = products.map(product => {
        const { id, name, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value, user, assignmentDate, condition, state } = product
        return [<Link to={`/ver-producto/${id}`}>{id}</Link>, <Link to={`/editar-producto/${id}`}>{name}</Link>, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value?.amount, `${user?.firstName ?? ''}${user?.lastName ? ` ${user.lastName}` : ''}`, assignmentDate, condition, state]
      })
      setProducts(data)
      setLoader(loader - 1)
    })
    EventRepository.getByUserId(id).then((events) => {
      setEvents(events)
      setLoader(loader - 1)
    })
  }, [])

  const name = `${user?.firstName ?? ''}${user?.lastName ? ` ${user.lastName}` : ''}`

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <h1>Perfil {name}</h1>
      <ul>
        <li><b>Id: </b>{user.id}</li>
        <li><b>Nombre: </b>{name}</li>
        <li><b>Rut: </b>{user.dni}</li>
        <li><b>Alias: </b>{user.nickName}</li>
        <li><b>Cliente: </b>{user.client?.name}</li>
        <li><b>Roles: </b>{user.roles?.map(r => r.name)?.join(', ')}</li>
      </ul>
      <EventWidget events={events}></EventWidget>
      <Table headers={productTableHeaders} data={products}></Table>
    </div>
  )
}