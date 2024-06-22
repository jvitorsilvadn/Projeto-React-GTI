import '../Styles/Footer.Modules.css'

export default function Footer() {
  return (
    <div className="footer">
        <div className="tituloFooter">Marmoraria <span>EMAGRAN</span></div>
        <div className="formulario">
        <form action="" method="">
                    <h2>FAÇA JÁ O SEU ORÇAMENTO</h2>
                    <div>
                        <input type="text" id="name" placeholder="Digite seu nome completo" />
                    </div>
                    <div>
                        <input type="email" id="mail" placeholder="Digite seu email" />
                    </div>
                    <div>
                        <input type="text" id="telefone" placeholder="Celular" />
                    </div>
                    <div>
                        <textarea id="msg" placeholder="Deixe uma mensagem"></textarea>
                    </div>
                    <div class="button">
                        <button type="submit">Enviar sua mensagem</button>
                    </div>
                </form>
        </div>
    </div>
  );
}