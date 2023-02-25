import React, { useReducer } from "react";
import Box from '@mui/material/Box';
import Container from "../../components/Container/Container";
import Title from '../../components/Title/Title';
import Textfiled from '../../components/Textfield/Textfiled';
import Output from '../../components/Output/Output';
import Button from '../../components/Button/Button';
import reducerCalculator from './redux/reducers/reducerCalculator';
import { changeCost, changeInitial, changePeriod } from './redux/actions/actionCreators'
import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 320,
            tablet: 768,
            laptop: 1120,
            desktop: 1440
        },
        step: 0
    }
})

export default function Calculator() {
    const [state, dispatch] = useReducer(reducerCalculator, {
        cost: 3300000,
        initial: 300000,
        period: 60
    })
    const { cost, initial, period } = state;

    const amountLoan = (initial, period, payment) => {
        return (Number(initial) + Number(period) * Number(payment))
    }

    const mounthlyPayment = (cost, initial, period) => {
        const one = Math.pow((1 + 0.05), period);
        const two = Math.pow((1 + 0.05), period);
        const three = cost - initial;
        return (cost - initial) * (0.05 * Math.pow((1 + 0.05), period) / (Math.pow((1 + 0.05), period) - 1))
    }

    React.useEffect(() => {
        mounthlyPayment(cost, initial, period)
        amountLoan(initial, period, mounthlyPayment(cost, initial, period))
    }, [])

    return (
        <Container>
            <Title type='h1'>Рассчитайте стоимость автомобиля в лизинг</Title>
            <form id="form-leasing">
                <Box sx={{
                    display: 'flex',
                    gap: '32px',
                    marginBottom: '51px',
                    [theme.breakpoints.down('tablet')]: {
                        flexWrap: 'wrap'
                    },
                    [theme.breakpoints.down('mobile')]: {
                        flexWrap: 'wrap'
                    }
                }}>
                    <Textfiled onChange={(e) => dispatch(changeCost(e.target.value))}
                    title='Стоимость автомобиля' 
                    min='1500000' 
                    max='10000000' 
                    endAdornment='₽' 
                    step='1000' 
                    initialValue={ cost } />
                    <Textfiled onChange={(e) => dispatch(changeInitial(e.target.value))}
                    title='Первоначальный взнос' 
                    min='0' 
                    max='2000000' 
                    endAdornment='₽' 
                    step='1000' 
                    initialValue={ initial } />
                    <Textfiled onChange={(e) => dispatch(changePeriod(e.target.value))}
                    title='Срок лизинга' 
                    min='6' 
                    max='120' 
                    endAdornment='мес.' 
                    step='1' 
                    initialValue={ period } />
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                    rowGap: '44px',
                    [theme.breakpoints.down('laptop')]: {
                        flexWrap: 'wrap'
                    },
                    [theme.breakpoints.down('tablet')]: {
                        flexWrap: 'wrap'
                    },
                    [theme.breakpoints.down('mobile')]: {
                        flexWrap: 'wrap'
                    }
                }}>
                    <Output title='Сумма договора лизинга' value={`${Math.round(amountLoan(initial, period, mounthlyPayment(cost, initial, period)))}₽`} />
                    <Output title='Ежемесячный платеж от' value={`${Math.round(mounthlyPayment(cost, initial, period))}₽`} />
                    <Button color='orange'>Оставить заявку</Button>
                </Box>
            </form>
        </Container>
    )
}