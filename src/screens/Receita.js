import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";
import { List, FormItemRow, FormItemCol, Title, Image, Subtitle, Detail, ImageNotFound, ImageContainer } from "../components/Recipe"

import { GET, GETFILE } from '../services/FB'
import _ from "lodash";

export function Receita() {
  let { id, type } = useParams();
  type = type.replace('-', ' ')
  const [recipe, setRecipe] = useState({});
  const [image, setImage] = useState('');
  const [aux, setAux] = useState(false);

  const getRecipe = async () => {
    const aux = await GET(`/${type.toLowerCase()}/${id}`)
    setRecipe(aux)

  }
  useEffect(() => {
    getRecipe()
  }, []);

  useEffect(() => {
    if (recipe.title) {
      getImage(recipe.title)
    }
  }, [recipe]);

  const getImage = async (title) => {
    let auxImg = await GETFILE(type, `${title.toLowerCase()}`)
    !!auxImg && setImage(auxImg)
    setAux(!aux)
  }

  return (
    <>
      <div className="child">
        {
          recipe.title && (
            <List key={recipe.title}>
              <FormItemRow>
                <FormItemCol>
                  <Title>{recipe.title}</Title>
                </FormItemCol>
              </FormItemRow>
              <FormItemRow>
                <FormItemCol wd={3} top>
                  <ImageContainer>
                    <Image src={image} />
                    {!image && <ImageNotFound>Imagem não encontrada</ImageNotFound>}
                  </ImageContainer>
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Ingredientes</Subtitle>
                  {recipe.ingredients.map(ing => (
                    <Detail key={ing}>{ing}</Detail>
                  ))}
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Modo de preparo</Subtitle>
                  <Detail>{recipe.preparation}</Detail>
                </FormItemCol>
              </FormItemRow>
            </List>
          )
        }
      </div>
    </>
  );
}