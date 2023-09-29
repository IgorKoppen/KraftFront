import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {Controller} from "react-hook-form";

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Muito Insatisfeito',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Insatisfeito',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutro',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfeito',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'muito satisfeito',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RadioGroupRating({control,name}:any) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={1}
            render={({ field }) => (
        <StyledRating
            {...field} onClick={(e:any) => { field.onChange(Number(e.target.value))}}
            name="highlight-selected-only"
            defaultValue={1}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
        />)}
        />
    );
}