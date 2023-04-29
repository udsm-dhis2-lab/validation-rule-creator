import React from 'react';
import {
  Table,
  TableHead,
  TableRowHead,
  TableCellHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  DataTableToolbar,
  IconAdd24,
  colors,
  SingleSelectField,
  InputField,
  SingleSelectOption,
  MultiSelectField,
  MultiSelectOption,
  CheckboxField,
  DataTable,
  DataTableRow,
  DataTableColumnHeader,
  DataTableCell,
  TableFoot,
  Pagination,
} from '@dhis2/ui';
import { useNavigate } from 'react-router-dom';
import './List.css';
import i18n from '@dhis2/d2-i18n';
import { DataQuery } from '@dhis2/app-runtime';

/* eslint-disable-next-line */
export interface ListProps {}

const query = {
  validationRules: {
    resource: 'validationRules',
  },
};

export function List(props: ListProps) {
  const navigate = useNavigate();
  function onCreateValidation() {
    navigate('create');
  }
  return (
    <DataQuery query={query}>
      {({ loading, error, data, refetch }) => {
        console.log(data);

        return (
          <>
            <div className="list-header">
              <h2>{i18n.t('Validation rule management')}</h2>
            </div>
            <div className="validation-filters">
              <InputField
                placeholder={i18n.t('Search by name or id')}
                name="defaultName"
                dense
              />

              <MultiSelectField
                prefix={i18n.t('Select validation group')}
                selected={['1']}
                dense
              >
                <MultiSelectOption label="one" value="1" />
                <MultiSelectOption label="two" value="2" />
                <MultiSelectOption label="three" value="3" />
                <MultiSelectOption label="four" value="4" />
                <MultiSelectOption label="five" value="5" />
                <MultiSelectOption label="six" value="6" />
                <MultiSelectOption label="seven" value="7" />
                <MultiSelectOption label="eight" value="8" />
                <MultiSelectOption label="nine" value="9" />
                <MultiSelectOption label="ten" value="10" />
              </MultiSelectField>
              <CheckboxField label={i18n.t('Show associated datasets')} dense />
            </div>
            <DataTableToolbar>
              {' '}
              <Button
                small
                icon={<IconAdd24 color={colors.grey600} />}
                onClick={onCreateValidation}
                rtrtvalue="default"
              >
                {i18n.t('New validation')}
              </Button>
            </DataTableToolbar>
            <DataTable>
              <TableHead>
                <DataTableRow>
                  <DataTableColumnHeader>First name</DataTableColumnHeader>
                  <DataTableColumnHeader>Last name</DataTableColumnHeader>
                  <DataTableColumnHeader>Incident date</DataTableColumnHeader>
                  <DataTableColumnHeader>Last updated</DataTableColumnHeader>
                </DataTableRow>
              </TableHead>
              <TableBody>
                <DataTableRow>
                  <DataTableCell>Onyekachukwu</DataTableCell>
                  <DataTableCell>Kariuki</DataTableCell>
                  <DataTableCell>02/06/2007</DataTableCell>
                  <DataTableCell>05/25/1972</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                  <DataTableCell>Kwasi</DataTableCell>
                  <DataTableCell>Okafor</DataTableCell>
                  <DataTableCell>08/11/2010</DataTableCell>
                  <DataTableCell>02/26/1991</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                  <DataTableCell>Siyabonga</DataTableCell>
                  <DataTableCell>Abiodun</DataTableCell>
                  <DataTableCell>07/21/1981</DataTableCell>
                  <DataTableCell>02/06/2007</DataTableCell>
                </DataTableRow>
              </TableBody>
              <TableFoot>
                <DataTableRow>
                  <DataTableCell colSpan="4">
                    <Pagination
                      page={10}
                      pageCount={21}
                      pageSize={50}
                      total={1035}
                    />
                  </DataTableCell>
                </DataTableRow>
              </TableFoot>
            </DataTable>
          </>
        );
      }}
    </DataQuery>
  );
}

export default List;
