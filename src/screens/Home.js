import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import colors from "../defs/colors";

import { GET, GETFILE } from '../services/FB'
import _ from "lodash";

import { List, FormItemRow, FormItemCol, Title, Image, Subtitle, Detail, ImageNotFound, ImageContainer, RecipeButton } from "../components/Recipe"


const HomeContainer = styled.div`  
  margin: 10px;
  padding: 15px;
  font-family: "Myriad Pro Regular";
`;

const Apresentation = styled.p`
  color: ${colors.greyDark};
  font-size: 30px;
  font-weight: bold;
`;

const Type = styled.p`
  color: ${colors.grey};
  font-size: 25px;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 5px;
`;

export function Home() {
  const history = useHistory();

  const [recipeDoce, setRecipeDoce] = useState(null);
  const [recipeSalgada, setRecipeSalgada] = useState(null);
  const [imageDoce, setImageDoce] = useState('');
  const [imageSalgada, setImageSalgada] = useState('');
  const [aux, setAux] = useState(false);

  const getRecipes = async () => {
    const auxDoce = await GET('/receita doce')
    const auxGetRecipeDoce = _.map(auxDoce, (val, uid) => {
      return { ...val, uid };
    })
    setRecipeDoce(
      auxGetRecipeDoce[auxGetRecipeDoce.length - 1]
    )
    const auxSalgada = await GET('/receita salgada')
    const auxGetRecipeSalgada = _.map(auxSalgada, (val, uid) => {
      return { ...val, uid };
    })
    setRecipeSalgada(
      auxGetRecipeSalgada[auxGetRecipeSalgada.length - 1]
    )
  }
  useEffect(() => {
    getRecipes()
  }, []);

  useEffect(() => {
    console.log('recipeDoce', recipeDoce)
    if (recipeDoce) {
      getImage(recipeDoce.title, 'Receita Doce')
    }
  }, [recipeDoce]);

  useEffect(() => {
    console.log('recipeSalgada', recipeSalgada)
    if (recipeSalgada) {
      getImage(recipeSalgada.title, 'Receita Salgada')
    }
  }, [recipeSalgada]);


  const getImage = async (title, type) => {
    let auxImgs = await GETFILE(type, `${title.toLowerCase()}`)
    !!auxImgs && (type === 'Receita Doce' ? setImageDoce(auxImgs) : setImageSalgada(auxImgs))
    setAux(!aux)
  }
  return (
    <div className="child">
      <HomeContainer>
        <Apresentation>Bem-vindo ao site de receitas Mão na Massa</Apresentation>
        {
          recipeDoce &&
          <>
            <Type>Ultimas receitas doces adicionadas</Type>
            <List key={recipeDoce.title}>
              <FormItemRow>
                <FormItemCol>
                  <RecipeButton onClick={() => history.push(`/receita/Receita-Doce/${recipeDoce.uid}`)}>
                    <Title>{recipeDoce.title}</Title>
                  </RecipeButton>
                </FormItemCol>
              </FormItemRow>
              <FormItemRow>
                <FormItemCol wd={3} top>
                  <RecipeButton onClick={() => history.push(`/receita/Receita-Doce/${recipeDoce.uid}`)}>
                    <ImageContainer>
                      <Image src={imageDoce ? imageDoce : null} />
                      {!imageDoce && <ImageNotFound>Imagem não encontrada</ImageNotFound>}
                    </ImageContainer>
                  </RecipeButton>
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Ingredientes</Subtitle>
                  {recipeDoce.ingredients.map(ing => (
                    <Detail key={ing}>{ing}</Detail>
                  ))}
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Modo de preparo</Subtitle>
                  <Detail>{recipeDoce.preparation}</Detail>
                </FormItemCol>
              </FormItemRow>
            </List>
          </>
        }
        {
          recipeSalgada &&
          <>
            <Type>Ultimas receitas salgadas adicionadas</Type>
            <List key={recipeSalgada.title}>
              <FormItemRow>
                <FormItemCol>
                  <RecipeButton onClick={() => history.push(`/receita/Receita-Salgada/${recipeSalgada.uid}`)}>
                    <Title>{recipeSalgada.title}</Title>
                  </RecipeButton>
                </FormItemCol>
              </FormItemRow>
              <FormItemRow>
                <FormItemCol wd={3} top>
                  <RecipeButton onClick={() => history.push(`/receita/Receita-Salgada/${recipeSalgada.uid}`)}>
                    <ImageContainer>
                      <Image src={imageSalgada ? imageSalgada : null} />
                      {!imageSalgada && <ImageNotFound>Imagem não encontrada</ImageNotFound>}
                    </ImageContainer>
                  </RecipeButton>
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Ingredientes</Subtitle>
                  {recipeSalgada.ingredients.map(ing => (
                    <Detail key={ing}>{ing}</Detail>
                  ))}
                </FormItemCol>
                <FormItemCol wd={3} top>
                  <Subtitle>Modo de preparo</Subtitle>
                  <Detail>{recipeSalgada.preparation}</Detail>
                </FormItemCol>
              </FormItemRow>
            </List>
          </>
        }
      </HomeContainer>
    </div>
  );
}
