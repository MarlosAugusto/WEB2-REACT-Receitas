import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom";

import { List, FormItemRow, FormItemCol, Title, Image, Subtitle, Detail, ImageNotFound, ImageContainer, RecipeButton } from "../components/Recipe"

import { GET, GETFILE } from '../services/FB'
import _ from "lodash";

export function ReceitasSalgadas() {
  const history = useHistory();

  const [recipes, setRecipes] = useState([]);
  const [images, setImages] = useState([]);
  const [aux, setAux] = useState(false);

  const getRecipes = async () => {
    const auxRcp = await GET('/receita salgada')
    setRecipes(
      _.map(auxRcp, (val, uid) => {
        return { ...val, uid };
      })
    )
  }

  useEffect(() => {
    getRecipes()
  }, []);

  useEffect(() => {
    recipes.forEach(async (rcp, index) => {
      await getImage(rcp.title, index)
    })
  }, [recipes]);

  const getImage = async (title, index) => {
    let auxImgs = images
    auxImgs[index] = await GETFILE('Receita Salgada', `${title.toLowerCase()}`) || ''
    setImages(auxImgs)
    setAux(!aux)
  }

  return (
    <>
      <div className="child">
        {
          recipes.map(({ title, ingredients, preparation, uid }, index) =>
            <List key={title}>
              <FormItemRow>
                <FormItemCol>
                  <RecipeButton onClick={() => history.push(`/receita/Receita-Salgada/${uid}`)}>
                    <Title>{title}</Title>
                  </RecipeButton>
                </FormItemCol>
              </FormItemRow>
              <FormItemRow>
                <FormItemCol wd={3} top>
                  <RecipeButton onClick={() => history.push(`/receita/Receita-Salgada/${uid}`)}>
                    <ImageContainer>
                      <Image src={images[index] ? images[index] : null} />
                      {!images[index] && <ImageNotFound>Imagem não encontrada</ImageNotFound>}
                    </ImageContainer>
                  </RecipeButton>
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Ingredientes</Subtitle>
                  {ingredients.map(ing => (
                    <Detail key={ing}>{ing}</Detail>
                  ))}
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Modo de preparo</Subtitle>
                  <Detail>{preparation}</Detail>
                </FormItemCol>
              </FormItemRow>
            </List>
          )
        }
      </div>
    </>
  );
}
