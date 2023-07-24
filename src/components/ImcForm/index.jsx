import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { FormImc } from "./atoms";

const ImcForm = () => {
    const [sexo, setSexo] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const enviaForm = (e) => {
        e.preventDefault();
        setShow(true);
    };

    const calcImc = (peso/(altura**2)).toFixed(2);

    return (
        <FormImc onSubmit={enviaForm}>
            <Form.Group controlId="sexo">
                <Form.Label>Selecione o sexo</Form.Label>
                <Form.Select
                    defaultValue=""
                    onChange={(e) => setSexo(e.target.value)}
                    required
                >
                    <option value="" disabled></option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="nomeAluno">
                <Form.Label>Nome do aluno: </Form.Label>
                <Form.Control
                    onChange={(e) => setNome(e.target.value)}
                    maxLength={50}
                    required
                />
            </Form.Group>
            <Form.Group controlId="idadeAluno">
                <Form.Label>Idade do aluno: </Form.Label>
                <Form.Control
                    type="number"
                    min={0}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="alturaAluno">
                <Form.Label>Altura do aluno (m): </Form.Label>
                <Form.Control
                    type="number"
                    step=".01"
                    min={0}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="pesoAluno">
                <Form.Label>Peso do aluno (kg): </Form.Label>
                <Form.Control
                    type="number"
                    step=".01"
                    min={0}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
            </Form.Group>
            <Button
                type="submit"
                variant="success"
                style={{ marginTop: 12 }}
            >Cadastrar</Button>
            <Modal 
                show={show}
                onHide={setShow}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Imc do aluno {nome}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>nome</th>
                                <th>sexo</th>
                                <th>idade</th>
                                <th>altura</th>
                                <th>peso</th>
                                <th>imc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{nome}</td>
                                <td>{sexo}</td>
                                <td>{idade}</td>
                                <td>{altura.toString().replace(".", ",")}</td>
                                <td>{peso.toString().replace(".", ",")}</td>
                                <td>{calcImc.toString().replace(".", ",")}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </FormImc>
    );
};

export default ImcForm;