import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader/loader.component'
import ProductRepository from '../../repositories/product/product-repository'
import Table from '../../components/table/table.component';

export function ListarProductosView() {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(0)
  const headers = ['id', 'name', 'tag', 'serialNumber', 'acquisitionDate', 'supplier', 'invoice', 'warrantyExpirationDate', 'value', 'user', 'assignmentDate', 'condition', 'state']

  useEffect(() => {
    setLoader(1)
    ProductRepository.getAll()
      .then((products) => {
        const data = products.map(product => {
          const { id, name, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value, user, assignmentDate, condition, state } = product
          return [id, <Link to={`/editar-producto/${id}`}>{name}</Link>, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value?.amount, user?.name, assignmentDate, condition, state]
        })
        setData(data)
        setLoader(loader - 1)
      })
  }, [])

  const pages = [{ url: '/home', name: 'Home' }]
  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <div className="container">
        <h1>Lista de productos</h1>
        <Table headers={headers} data={data}></Table>
      </div>
    </div>
  )
}
