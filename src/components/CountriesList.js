import {Routes, Route, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const CountriesList = (props) => {
    const { countries} = props

    // useEffect(() => {
    //     setCountries(countriesData)
    // }, [countriesData])

    return (
      <div className='list-group'>
          {countries.map(country => {
            return (<Link to = { `/$country.alpha3Code}`}>{country.name.common}</Link>)
          })}

      </div>
            // <div className="list-group">
            //   <a className="list-group-item list-group-item-action" Link="/ABW">:aruba: Aruba</a>
            //   <a className="list-group-item list-group-item-action" Link="/AFG">:afeganistão: Afghanistan</a>
            //   <a className="list-group-item list-group-item-action" Link="/AGO">:angola: Angola</a>
            //   <a className="list-group-item list-group-item-action" Link="/AIA">:anguila: Anguilla</a>
            //   <a className="list-group-item list-group-item-action" Link="/ALA">:ilhas_aland: Åland Islands</a>
            //   <a className="list-group-item list-group-item-action" Link="/ALB">:albânia: Albania</a>
            //   <a className="list-group-item list-group-item-action" Link="/AND">:andorra: Andorra</a>
            //   <a className="list-group-item list-group-item-action" Link="/ARE">:emirados_árabes: United Arab Emirates</a>
            //   <a className="list-group-item list-group-item-action" Link="/ARG">:argentina: Argentina</a>
            //   <a className="list-group-item list-group-item-action" Link="/ARM">:armênia: Armenia</a>
            //   <a className="list-group-item list-group-item-action" Link="/ASM">:samoa_americana: American Samoa</a>
            //   <a className="list-group-item list-group-item-action" Link="/ATA">:antártida: Antarctica</a>
            //   <a className="list-group-item list-group-item-action" Link="/FLK">:ilhas_malvinas: Falkland Islands</a>
            //   <a className="list-group-item list-group-item-action active"Link="/FRA">:frança: France</a>
            //   <a className="list-group-item list-group-item-action" Link="/ZWE">:zimbábue: Zimbabwe</a>
            // </div>
          
    )
}

export default CountriesList