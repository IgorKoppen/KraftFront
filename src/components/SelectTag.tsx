import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from "axios";
import {Controller} from "react-hook-form";

const animatedComponents = makeAnimated();

const Options = async () => {
    const response = await axios.get("http://localhost:8080/tags");
    const tags = response.data;

    const options = tags.map((tag:tags) => ({
        value: tag.codTag,
        label: tag.nomeTag,
    }));

    return options;
};

interface tags{
    codTag: number,
    nomeTag: string
}

export default function AnimatedMulti({ control, name }:any) {
    const [options, setOptions] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        Options().then((options) => setOptions(options));
    }, []);

    const handleChange = (selectedOptions:any) => {
        setSelectedTags(selectedOptions);
    };

    // Return an array of codTags
    const getCodTags = () => {
        return selectedTags.map((tag : tags) => tag.codTag);
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, ref }}) => (
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    value={value}
                    options={options}
                    onChange={handleChange}
                />
            )}
        />
    );
}