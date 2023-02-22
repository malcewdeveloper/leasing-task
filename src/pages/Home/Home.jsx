import React from "react";
import Box from '@mui/material/Box';
import Container from "../../components/Container/Container";
import Title from '../../components/Title/Title';
import Textfiled from '../../components/Textfield/Textfiled';
import Output from '../../components/Output/Output';
import Button from '../../components/Button/Button';


export default function Home() {
    return (
        <Container>
            <Title type='h1'>Рассчитайте стоимость автомобиля в лизинг</Title>
            <form id="form-leasing">
                <Box sx={{
                    display: 'flex',
                    gap: '32px',
                    marginBottom: '51px'
                }}>
                    <Textfiled title='Стоимость автомобиля' min='0' max='3300000' endAdornment='₽' step='1000' initialValue='3300000' />
                    <Textfiled title='Первоначальный взнос' min='0' max='2000000' endAdornment='₽' step initialValue='420000' />
                    <Textfiled title='Срок лизинга' min='0' max='60' endAdornment='мес.' step='1' initialValue='60' />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px'
                }}>
                    <Output title='Сумма договора лизинга' value='4467313₽' />
                    <Output title='Ежемесячный платеж от' value='114455₽' />
                    <Button color='orange'>Оставить заявку</Button>
                </Box>
            </form>
        </Container>
    )
}