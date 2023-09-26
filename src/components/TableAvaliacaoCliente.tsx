import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    MaterialReactTable,
    type MaterialReactTableProps,
    type MRT_Cell,
    type MRT_ColumnDef,
    type MRT_Row,
} from 'material-react-table';
import {
    Box,
    IconButton,
    Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from "axios";




type AvaliacaoCliente = {
    codAvaliacoesCliente: number,
    mensagem: string,
    dataAvalicao: any,
    tagsCliente: [],
    produtos: any,
    marcas: any;
};

const TableAvaliacaoCliente = () => {
    const [tableData, setTableData] = useState<AvaliacaoCliente[]>([]);
    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});

    useEffect(() => {
        axios.get("http://localhost:8080/avaliacaoclientes").then(function (response) {

            setTableData(response.data);
        })
    }, []);



    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row: MRT_Row<AvaliacaoCliente>) => {
            if (
                !confirm(`Você ter certeza que deseja deletar? ${row.getValue('nome')}`)
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            axios.delete(`http://localhost:8080/avaliacaoclientes/${row.id}`).then(function (response) {
                setTableData(response.data);
            })
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData],
    );

    const getCommonEditTextFieldProps = useCallback(
        (
            cell: MRT_Cell<AvaliacaoCliente>,
        ): MRT_ColumnDef<AvaliacaoCliente>['muiTableBodyCellEditTextFieldProps'] => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid = cell.column.id === "nome" ?  validateRequired(event.target.value) : null;
                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} inválido`,
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },
        [validationErrors],
    );

    const columns = useMemo<MRT_ColumnDef<AvaliacaoCliente>[]>(
        () => [
            {
                accessorKey: 'codAvaliacoesCliente',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 80,

            },
            {
                accessorKey: 'mensagem',
                header: 'Mensagem',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 250,

            },
            {
                accessorKey: 'dataAvalicao',
                header: 'Data da avaliação',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 12,

            },
            {
                accessorKey: 'produtos.nome',
                header: 'Produto',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 25,
            },
            {
                accessorKey: 'marcas.nome',
                header: 'Marca',
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
                size: 25,

            },
        ],
        [getCommonEditTextFieldProps],
    );

    return (
        <>
            <MaterialReactTable
                displayColumnDefOptions={{
                    'mrt-row-actions': {
                        muiTableHeadCellProps: {
                            align: 'center',
                        },
                        size: 120,

                    },
                }}
                columns={columns}
                data={tableData}
                editingMode="modal" //default
                enableColumnOrdering
                enableEditing
                onEditingRowCancel={handleCancelRowEdits}

                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}  >
                        <Tooltip arrow placement="right" title="Deletar">
                            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            />
        </>
    );
};

interface CreateModalProps {
    columns: MRT_ColumnDef<AvaliacaoCliente>[];
    onClose: () => void;
    onSubmit: (values: AvaliacaoCliente) => void;
    open: boolean;
}

//example of creating a mui dialog modal for creating new rows

const validateRequired = (value: string) => !!value.length && value.length < 26;
export default TableAvaliacaoCliente;