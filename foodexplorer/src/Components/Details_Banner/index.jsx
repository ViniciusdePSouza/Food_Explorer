import { Container, Content, MinusIcon, PlusIcon, IngredientsWrapper, IngredientCard, ButtonWrapper, HeaderButton } from './styles'

import { Button } from '../Button'

import parmaToast from '../../assets/dishes/parma-toast.png'
import lettuce from '../../assets/ingredients/lettuce.png'

import orderIcon from '../../assets/orderIcon.svg'
import leftArrow from '../../assets/leftarrow.svg'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

export function DetailsBanner({ data, ...rest }) {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)

    function handleBack() {
      navigate((-1))
    }

    function handleIncrease(){
        setCounter(counter + 1) 
    }
    function handleDecrease(){
        if(counter <= 1) {
            return 
        }
        setCounter(counter - 1)
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

                <img src={`http://localhost:3333/files/${data.photo}`} alt="" />

                <div>
                    <h1>{data.name}</h1>

                    <h3>{data.description}</h3>

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
                        <h2>{data.price}</h2>

                        <MinusIcon onClick={handleDecrease}>
                            <FiMinus />
                        </MinusIcon>

                        <span>{counter}</span>

                        <PlusIcon onClick={handleIncrease}>
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