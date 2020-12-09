import React from 'react';
import './Contacto.css';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const {REACT_APP_EMAILJS_USER_ID, REACT_APP_RECAPTCHA_SITE_KEY} = process.env;

const Contacto = () =>{
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [asunto, setAsunto] = React.useState('');
    const [msg, setMsg] = React.useState('');
    const [error, setError] = React.useState(null);
    const [send, setSend] = React.useState(false);
    //const [form, setForm] = React.useState([]);
    
    const pinchado = (value) => {
        if(value !== null){
            
            console.log("Pinchaste el reCAPTCHA mirando la consola, ah eres listo muchacho/a!")
            setError(null)
        }
    }
        
    const process = e => {
        e.preventDefault();
        
        if(!name.trim()){
            setError('Todos los campos son obligatorios')
            return
        }
        if(!email.trim()){
            setError('Todos los campos son obligatorios')
            return
        }
        if(!tel.trim()){
            setError('Todos los campos son obligatorios')
            return
        }
        if(!asunto.trim()){
            setError('Todos los campos son obligatorios')
            return
        }
        if(!msg.trim()){
            setError('Todos los campos son obligatorios')
            return
        }
        /*
        setForm([
            ...form,
            {
                name,
                email,
                tel,
                asunto,
                msg
            }
        ])
        */
        
        emailjs.sendForm('service_92wkvrk', 'template_o0xllyd', e.target, REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            
            console.log(result.text);
            setSend(true)
            //limpiamos estados y campo
            e.target.reset() //el e.target me trae el formulario
            setName('')
            setEmail('')
            setTel('')
            setAsunto('')
            setMsg('')

        }, (error) => {
            console.log(error.text);
            if(error.text === 'The g-recaptcha-response parameter not found'){
                setError('No pinchaste el reCAPTCHA, eres un robot ?')
                return
            }
        });

        setError(null)
        
    }

    
    return(
        <section id="Contacto" className="Contacto-section">
            <h1 className="effectScroll">Contacto</h1>
            
                
            <div className="Contacto-content effectScroll">
                <p className="contacto-p">Tenes alguna pregunta, tenes algún consejo de mejora o tenes alguna propuesta podes mandarme un mail aquí.</p>

                {send ? (<h2>Su mensaje se ha enviado con exito!</h2>):
                
                (

                <form className="form-contacto " onSubmit={process}>
                    <input className="input input-name" type="text" placeholder="Nombre" name="name" autoComplete="off" onChange={e => setName(e.target.value)}/>
                    <input className="input input-email" type="text" placeholder="Email" name="email" autoComplete="off" onChange={e => setEmail(e.target.value)}/>
                    <input className="input input-tel" type="text" placeholder="Teléfono o Celular" autoComplete="off" name="tel" onChange={e => setTel(e.target.value)}/>
                    <input className="input input-asunto" type="text" placeholder="Asunto" name="asunto" autoComplete="off" onChange={e => setAsunto(e.target.value)}/>
                    <textarea className="input textarea" type="textarea" placeholder="Mensaje" name="msg" onChange={e => setMsg(e.target.value)}/>

                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={pinchado}
                    />

                    {error ? <p className="contacto-error">{error}</p> : null}

                    <button className="button-contacto" type="submit">Enviar</button>
                </form>
                )}
            </div>
        </section>
    )
}

export default Contacto