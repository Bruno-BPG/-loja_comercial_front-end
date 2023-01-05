import "./style.css";

const LoginFrom = () => {
    return (
        <div className="container">
            <div className="box">
                <div className="textAjusting2">
                    <span className="ajustingText1">Login</span>
                </div>
                <div className="textAjusting1">Usuario</div>
                <div className="conteiner2">
                    <input className="input1" type="text" />
                </div>
                <div className="textAjusting1">Senha</div>
                <div className="conteiner2">
                    <input className="input1" type="text" />
                </div>
                <div className="conteiner3">
                    <span className="textajusting3">Esqueci minha senha</span>
                </div>
                <div className="conteiner2">
                    <button className="button1">Entrar</button>
                </div>
                <div className="conteiner4">
                    <span>Ainda não possui uma conta?</span>
                </div>
                <div className="conteiner2">
                    <button className="button2">Entrar</button>
                </div>
            </div>
        </div>
    )
}


export default LoginFrom;
