import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import Botao from '../Botao/index.js';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    const AoSalvar = (evento) => { /*função que será chamada quando o formulário for submetido*/ 
        evento.preventDefault() /*previne que a página atualize*/
    }

    return (
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio ={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
    )
}

export default Formulario;