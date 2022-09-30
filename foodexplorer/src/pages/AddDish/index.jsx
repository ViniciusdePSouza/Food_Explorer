import { Container, HeaderButton, Form, Content, ShorterInput, BiggerInput } from './styles'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { InputAddDish } from '../../Components/InputAddDish'
import { IngredientItem } from '../../Components/IngredientItem'


import UploadIcon from '../../assets/uploadIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'

export function AddDish() {
    return (
        <Container>
            <Header />

            <Content>
                <header>
                    <HeaderButton>
                        <img src={leftArrow} alt="" />
                        voltar
                    </HeaderButton>
                </header>

                <Form>
                    <h1>Adicionar Prato</h1>
                    <div>
                        <ShorterInput>
                            <label htmlFor='img'>
                                Imagem do Prato
                            </label>

                            <InputAddDish placeholder="Pesquisar prato nos favoritos" type="file" id='img' name='img' />
                        </ShorterInput>
                        <BiggerInput>
                            <label htmlFor='name'>
                                Nome do Prato
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='name' name='name' />
                        </BiggerInput>
                    </div>
                    <div>
                        <BiggerInput>
                            <div>
                                <IngredientItem value="Pão Naan" />
                                <IngredientItem placeholder="Adicionar" isNEW />
                            </div>
                        </BiggerInput>
                        <ShorterInput>
                            <label htmlFor='price'>
                                Preço
                            </label>

                            <InputAddDish placeholder="Ex.: Salada Ceasar" type="text" id='price' name='price' />
                        </ShorterInput>
                    </div>
                </Form>
            </Content>


            <Footer />
        </Container>
    )
}