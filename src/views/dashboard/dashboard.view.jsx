import React, { useState, useEffect } from "react"
import "./dashboard.view.css"
import DashboardRepository from "../../repositories/dashboard/dashboard.repository"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import Loader from "../../components/loader/loader.component"

export function Dashboard() {
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [dashboard, setDashboard] = useState({})

  useEffect(() => {
    setLoader(1)
    DashboardRepository.get()
      .then((dashboard) => {
        setLoader(loader - 1)
        console.log('dashboard', dashboard)
        setDashboard(dashboard)
      })
  }, [])

  return (
    <div className="container dashboard-view">
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <h1>Dashboard</h1>
      <div className="border-wrap">
        <div className="dashboard-items">
          {dashboard.tags?.map(tag => (
            <div className="dashboard-item">
              <div className="principal">
                <div className="principal-name">{tag.name}</div>
                <div className="principal-img"><i className="material-icons">{tag.image}</i></div>
              </div>
              <div className="dashboard-data">
                <div className="data-total">TOTAL <span>{tag.total}</span></div>
                <div className={`data-free ${tag.free < tag.threshold ? 'item-down' : ''}`}>En Stock <span>{tag.free}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}