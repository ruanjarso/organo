import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        console.log(event.target.value)
    }

    return(
        <div className='campo-texto'> 
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;