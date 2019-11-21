import React, { useState } from 'react'

import { POST, POSTFILE } from '../services/FB'
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button"
import colors from "../defs/colors";

import { Form, Input, TextArea, Select, Label, ReadOnlyText, FormItemCol, FormItemRow } from "../components/Recipe"

export function NovaReceita() {
  const history = useHistory();

  const [type, setType] = useState('Receita Doce');
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [addedsIngredients, setAddedsIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (addedsIngredients === '') {
      setAddedsIngredients(ingredient)
    } else {
      setAddedsIngredients(`${addedsIngredients}, ${ingredient}`)
    }
    let aux = ingredients
    aux.push(ingredient)
    setIngredients(aux)
    setIngredient('')
  }

  const saveRecipe = async (e) => {
    e.preventDefault();

    await POST({
      type,
      title,
      ingredients,
      preparation
    }, `/${type.toLowerCase()}/`)

    let file = document.getElementById('file').files[0];
    await POSTFILE(type, file, title.toLowerCase())

    document.getElementById('file').value = null
    setType('Receita Doce')
    setTitle('')
    setIngredient('')
    setIngredients([])
    setAddedsIngredients('')
    setPreparation('')

    history.push("/");
  }

  return (
    <>
      <div className="child">
        <Form>
          <FormItemRow mt={5}>
            <FormItemCol wd={2}>
              <Label>Tipo da receita</Label>
              <Select value={type} onChange={e => setType(e.target.value)} >
                <option value="Receita Doce">Receita Doce</option>
                <option value="Receita Salgada">Receita Salgada</option>
              </Select>
            </FormItemCol>
            <FormItemCol wd={2}>
              <Label>Nome da receita</Label>
              <Input value={title} onChange={e => setTitle(e.target.value)} />
            </FormItemCol>
          </FormItemRow>
          <FormItemRow mt={5}>
            <FormItemCol wd={3}>
              <Label>Adicionar imagem</Label>
              <Input type="file" accept="image/*" id="file" />
            </FormItemCol>
            <FormItemCol wd={3}>
              <Label>Ingrediente</Label>
              <Input value={ingredient} onChange={e => setIngredient(e.target.value)} />
            </FormItemCol>
            <FormItemCol wd={3}>
              <Label>{''}</Label>
              <Button bg={colors.secundary} color={colors.primary} title="Adicionar o ingrediente" clicked={(e) => handleAddIngredient(e)} />
            </FormItemCol>
          </FormItemRow>
          <FormItemRow mt={5}>
            <FormItemCol wd={1}>
              <Label>Ingredientes adicionados</Label>
              <ReadOnlyText>{addedsIngredients}</ReadOnlyText>
            </FormItemCol>
          </FormItemRow>
          <FormItemRow mt={5}>
          </FormItemRow>
          <FormItemRow mt={5}>
            <FormItemCol>
              <Label>Modo de preparo</Label>
              <TextArea value={preparation} onChange={e => setPreparation(e.target.value)} />
            </FormItemCol>
          </FormItemRow>
          <FormItemRow mt={20} center>
            <FormItemCol wd={3}>
              <Label>{''}</Label>
              <Button bg={colors.secundary} color={colors.primary} title="SALVAR RECEITA" clicked={(e) => saveRecipe(e)} />
            </FormItemCol>
          </FormItemRow>
        </Form>
      </div>
    </>
  );
}
