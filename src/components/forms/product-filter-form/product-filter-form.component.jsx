import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import M from 'materialize-css'
import "./product-filter-form.component.css"
import StateRepository from "../../../repositories/state/state.repository"
import TagRepository from "../../../repositories/tag/tag.repository"

export default function ProductFilterForm() {

  const [tags, setTags] = useState([])
  const [states, setStates] = useState([])
  const { register, errors, handleSubmit } = useForm()

  const onSubmitSearch = (filter) => {
    console.log('----- product filter', filter)
  }

  useEffect(() => {
    StateRepository.getAll().then((states) => {
      setStates(states)
      console.log('states', states)
      M.FormSelect.init(document.querySelectorAll('#product-filter-form-states'))
    })
    TagRepository.getAll().then((tags) => {
      setTags(tags)
      M.FormSelect.init(document.querySelectorAll('#product-filter-form-tags'))
    })
  })

  return (
    <form className="product-filter-form" onSubmit={handleSubmit(onSubmitSearch)} >
      <div className="row" >
        <div className="input-field col m4 s12" >
          <label htmlFor="firstName" >¿Qué estás buscando ? </label>
          <input
            id="product-list-search"
            name="firstName"
            type="text"
            className={errors?.firstName ? 'invalid' : 'valid'}
            {...register('firstName', {})
            }
          />
          <span className="brown-text" >
            {errors?.firstName?.message}
          </span>
        </div>

        <div className="input-field col m3 s12" >
          <label className="active" >Categoría</label>
          <select
            name="tags"
            id="product-filter-form-tags"
            className={errors?.tags ? 'invalid' : 'valid'}
            {...register("tags", {})
            }
          >
            <option value="no" >Todos</option>
            {
              tags.map((tag) => (
                <option value={tag.id} key={`tag-${tag.id}`}> {tag.name} </option>
              ))
            }
          </select>
          <span className="brown-text" >
            {errors?.tags?.message}
          </span>
        </div>

        <div className="input-field col m3 s12" >
          <label className="active" >Estado</label>
          <select
            name="states"
            id="product-filter-form-states"
            className={errors?.states ? 'invalid' : 'valid'}
            {...register("states", {})
            }
          >
            <option value="no" >Todos</option>
            {
              states.map((state) => (
                <option value={state.key} key={`client-${state.key}`}> {state.tag} </option>
              ))}
          </select>
          <span className="brown-text" >
            {errors?.states?.message}
          </span>
        </div>
        <button className="btn col m2 s12 waves-effect waves-light peanut" type="submit" >
          Buscar
          <i className="material-icons right" > search </i>
        </button>
      </div>
    </form>
  )
}