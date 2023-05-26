import { useState } from "react";
import "./Myform.css";

const Myform = ({user}) => {
    // 6 - Controlleed inputs
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [role, setRole] = useState("");

    const [bio, setBio] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulario");
        if (name === "Robertinho") {
            window.alert("Esse nome é de bandido!");
        }

        // 7 - limpar formulario
        handleClear()
    }

    const handleClear = () => {
        setName("");
        setEmail("");
        setBio("");
    }
    

  return (
    <div>

        {(name === "" || email === "" ? <h1>Digita seu nome ai</h1> : <h1>Olá {name}! <br/> Seu email é: {email}? <br/> Bio: {bio} <br/> Role: {role}</h1>)}

        {/* 5 - envio de form */}
        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" value={name} name="name" placeholder="Digite seu nome" onChange={handleName} />
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 4 - Simplificação de manipulação de state */}
                <input type="email" value={email} name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
            </label>
            {/* 8 - TextArea em react */}
            <label>
                <span>Bio: </span>
            </label>
            <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            {/* 9 - input select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option selected value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input className="btnSubmit" type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myform;