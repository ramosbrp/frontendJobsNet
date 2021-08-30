import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './styles.css';


export function Form() {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [date, setDate] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [tel1, setTel1] = useState('');
    const [cel, setCel] = useState('');
    const [email, setEmail] = useState('');
    const [identity, setIdentity] = useState('');
    const [cpf, setCpf] = useState('');
    const [haveVehicle, setVehicle] = useState('');
    const [driverLisence, setLisence] = useState('');


    const history = useHistory();

    async function submitForm(e) {
        e.preventDefault();
        try {
            const result = await axios.post(`https://ramosjobsnet.herokuapp.com/register`, {
                name,
                profession,
                date,
                maritalStatus,
                gender,
                address:{
                    cep,
                    street,
                    number,
                    neighborhood,
                    city,
                    state,
                },
                tel1,
                cel,
                email,
                documents: {                    
                    identity,
                    cpf,
                    haveVehicle,
                    driverLisence
                } 
            })
            history.push('/success');
        } catch (err) {
            
            alert(err);
        }
    }

    async function findCep() {
        try {
            const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setNeighborhood(result.data.bairro);
            setStreet(result.data.logradouro);
            setCity(result.data.localidade);
            setState(result.data.uf);
        } catch (err) {
            console.log('CEP INVÁLIDO');
        }
    }


    return (
        <>
            <section className="contact-clean"  >
                <form method="post"  onSubmit={submitForm} sytyle={{ width:"30%" }} >
                    <h2 className="text-center">Formulário de Cadastro</h2>
                    <h4 className="text-start">Dados Pessoais</h4>


                    <div className="mb-3">
                        <label className="form-label" >Nome Completo *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="text" name="name" placeholder="Nome Completo" required="" maxLength="20"   onChange={e => setName(e.target.value)} value={name} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Cargo Pretendido *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="text" name="profession" placeholder="Cargo Pretendido"   maxLength="20" required="" onChange={e => setProfession(e.target.value)} value={profession} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Data de Nascimento *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="date" name="date" required="" onChange={e => setDate(e.target.value)} value={date} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Estado Civil</label>
                        <select className="border rounded-pill shadow form-select"  onChange={e => setMaritalStatus(e.target.value)} value={maritalStatus} >
                            <optgroup label="Estado Civil">
                                <option disabled value="">Selecione</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="casado">Casado</option>
                                <option value="separado">Separado</option>
                                <option value="divorciado">Divorciado</option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Sexo</label>
                        <select className="border rounded-pill shadow form-select" name="masculino"  onChange={e => setGender(e.target.value)} value={gender} >
                            <optgroup label="Sexo">
                                <option disabled value="" selected >Selecione</option>
                                <option value="masculino" >Masculino</option>
                                <option value="feminino">Feminino</option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">CEP *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="number" name="cep" placeholder="CEP" min="8" max="8" required="" onChange={e => setCep(e.target.value)}
                                        onBlur={() => findCep()}
                                        maxLength={8}
                                        value={cep} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Logradouro *</label>
                        <input className="placeholder border rounded-pill shadow-lg form-control" type="text" name="street" placeholder="Logradouro"  required="" maxLength="20" onChange={e => setStreet(e.target.value)} value={street}/>

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Número *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="number" name="number" placeholder="Número" required="" max="20" onChange={e => setNumber(e.target.value)} value={number} />

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Bairro *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="text" name="neighborhood" placeholder="Bairro" required=""   onChange={e => setNeighborhood(e.target.value)} value={neighborhood} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cidade *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="text" name="city" placeholder="Ciidade"   required="" maxLength="20" onChange={e => setCity(e.target.value)} value={city} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Estado</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="text" name="state" required="" placeholder="Estado"   maxLength="20" onChange={e => setState(e.target.value)} value={state} />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Telefone Fixo</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="text" placeholder="somente número" name="tel1"   onChange={e => setTel1(e.target.value)} value={tel1} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Celular *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="number" placeholder="somente números" name="cel" min="11" max="11" required="" onChange={e => setCel(e.target.value)} value={cel} />
                        </div>

                    <div className="mb-3">
                        <label className="form-label">E-mail *</label>
                        <input className="placeholder border rounded-pill shadow form-control is-invalid" type="email" name="email" placeholder="seuemail@exemplo.com" required=""  onChange={e => setEmail(e.target.value)} value={email} />
                        </div>

                    <div className="border-success mb-3">
                        <h4 className="text-start">Documentos</h4>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" >CPF *</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="number" name="cpf" placeholder="somente números" min="11" max="11" required=""  onChange={e => setCpf(e.target.value)} value={cpf} />
                    </div>

                    <div className="mb-3"><label className="form-label" >Identidade</label>
                        <input className="placeholder border rounded-pill shadow form-control" type="number" placeholder="somente números" name="identity" min="9" max="9" onChange={e => setIdentity(e.target.value)} value={identity} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Possui veículo?</label>
                        <select className="border rounded-pill shadow form-select" onChange={e => setVehicle(e.target.value)} value={haveVehicle} >
                            <optgroup label="Possui Veículo?">
                                <option selected disabled value="">Selecione</option>
                                <option value="true" >Sim</option>
                                <option value="false">Não</option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Habilitação?</label>
                        <select className="border rounded-pill shadow form-select" onChange={e => setLisence(e.target.value)} value={driverLisence} >
                            <optgroup label="Habilitação">
                                <option selected disabled value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="não">Não</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="mb-3"><input className="btn btn-primary" type="submit" value="Enviar" onClick={ submitForm } /></div>
                    
                </form>
            </section>
        </>
    )
}

