import { Container, HeaderButton, Form, Content, ShorterInput, BiggerInput, Textarea, Section, InputFile, FormButton } from './styles'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { InputAddDish } from '../../Components/InputAddDish'
import { IngredientItem } from '../../Components/IngredientItem'

import UploadIcon from '../../assets/uploadIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'

import { useNavigate } from 'react-router-dom'

export function AddDish() {
    const navigate = useNavigate()

    function handleBack() {
      navigate((-1))
    }

    return (
        <Container>
            <Header />

            <Content>
                <header>
                    <HeaderButton onClick={handleBack}>
                        <img src={leftArrow} alt="" />
                        voltar
                    </HeaderButton>
                </header>

                <Form>
                    <h1>Adicionar Prato</h1>
                    <Section>
                        <ShorterInput>
                            <label htmlFor='img'>
                                Imagem do Prato
                            </label>

                            <InputFile>
                            <img src={UploadIcon} alt="" />
                            <label htmlFor='dish-picture' id='label-picture'>
                                Selecione a foto do prato 
                                <input type='file' id='dish-picture'/>
                            </label>
                            </InputFile>
                        </ShorterInput>
                        <BiggerInput>
                            <label htmlFor='name'>
                                Nome do Prato
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='name' name='name' />
                        </BiggerInput>
                    </Section>
                    <Section>
                        <BiggerInput>
                            <span>Ingredientes</span>
                            <Section id='ingredients-section'>
                                <IngredientItem value="Pão Naan" />
                                <IngredientItem placeholder="Adicionar" isNew />
                            </Section>
                        </BiggerInput>
                        <ShorterInput>
                            <label htmlFor='price'>
                                Preço
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='price' name='price' />
                        </ShorterInput>
                    </Section>

                    <Textarea>
                        <label htmlFor='description'>
                            Descrição
                        </label>

                        <textarea name="description" id="description" placeholder="Descrição do prato"></textarea>
                    </Textarea>

                    <Section>
                        <FormButton>Adicionar Prato</FormButton>
                    </Section>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}