import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorLevelRepository from '../../repositories/doctor-level/doctor-level.repository'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component'
import Loader from '../../components/loader/loader.component'

export default function DoctorLevelMaintainerPage() {
  const [doctorLevels, setDoctorLevels] = useState([])

  const pages = [{ url: '/home', name: 'Home' }]
  const [loader, setLoader] = useState(0)

  useEffect(() => {
    setLoader(1)
    DoctorLevelRepository.getAll()
      .then((doctorLevelsAux) => {
        setLoader(loader - 1)
        setDoctorLevels(doctorLevelsAux)
      })
  }, [])

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <div className="container">
        <h1>Mantenedor Escalafones</h1>
        <div className="collection">
          {doctorLevels.map((doctorLevel) => (
            <Link
              to={`/doctor-levels/${doctorLevel.id}`}
              key={doctorLevel.id}
              className="collection-item"
            >
              {doctorLevel.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
