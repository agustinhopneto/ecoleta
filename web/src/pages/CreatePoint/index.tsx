import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../components/Button';

import {
  Container,
  Field,
  // FieldCheck,
  FieldGroup,
  Form,
  Header,
  ItemsGrid,
  // LeaftletContainer,
  Item,
} from './styles';

import logo from '../../assets/logo.svg';

const CreatePoint: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </Header>
      <Form>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <Field>
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </Field>
            <Field>
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <FieldGroup>
            <Field>
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </Field>

            <Field>
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma Cidade</option>
              </select>
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <ItemsGrid>
            <Item selected>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </Item>

            <Item>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </Item>
          </ItemsGrid>
        </fieldset>

        <Button type="submit">Cadastrar ponto de coleta</Button>
      </Form>
    </Container>
  );
};

export default CreatePoint;
