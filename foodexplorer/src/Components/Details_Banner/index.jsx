import { Container, Content, MinusIcon, PlusIcon, IngredientsWrapper, IngredientCard, ButtonWrapper, HeaderButton } from './styles'

import { Button } from '../Button'

import parmaToast from '../../assets/dishes/parma-toast.png'
import lettuce from '../../assets/ingredients/lettuce.png'

import orderIcon from '../../assets/orderIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

export function DetailsBanner() {
    const navigate = useNavigate()

    function handleBack() {
      navigate((-1))
    }

    return (
        <Container>
            <header>
                <HeaderButton onClick={handleBack}>
                    <img src={leftArrow} alt="" />
                    voltar
                </HeaderButton>
            </header>

            <Content>

                <img src={parmaToast} alt="" />

                <div>
                    <h1>Salada Ravanello</h1>

                    <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h3>

                    <IngredientsWrapper>

                        <IngredientCard>
                            <img src={lettuce} alt="" />
                            <h5>Alface</h5>
                        </IngredientCard>

                        <IngredientCard>
                            <img src={lettuce} alt="" />
                            <h5>Alface</h5>
                        </IngredientCard>

                        <IngredientCard>
                            <img src={lettuce} alt="" />
                            <h5>Alface</h5>
                        </IngredientCard>

                        <IngredientCard>
                            <img src={lettuce} alt="" />
                            <h5>Alface</h5>
                        </IngredientCard>

                    </IngredientsWrapper>

                    <ButtonWrapper>
                        <h2>R$ 25,97</h2>

                        <MinusIcon>
                            <FiMinus />
                        </MinusIcon>

                        <span>01</span>

                        <PlusIcon>
                            <FiPlus />
                        </PlusIcon>

                        <div>
                            <Button loading={false} title="Incluir" picture={orderIcon} />
                        </div>

                    </ButtonWrapper>
                </div>

            </Content>
        </Container>
    )
}