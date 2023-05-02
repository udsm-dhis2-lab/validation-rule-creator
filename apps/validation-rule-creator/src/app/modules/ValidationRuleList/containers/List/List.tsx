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
import { ValidationRuleResponse } from '../../models';

/* eslint-disable-next-line */
export interface ListProps {}

const query = {
  validationRules: {
    resource: 'validationRules',
    params: () => ({
      fields:
        'id,name,displayName,description,instruction,importance,periodType,lastUpdated',
    }),
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
        if (!data) {
          return <div>Loading</div>;
        }

        const validationRuleResponse = new ValidationRuleResponse(
          data as Record<string, unknown>,
          'validationRules'
        );

        console.log(validationRuleResponse);

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
                  <DataTableColumnHeader>Name</DataTableColumnHeader>
                  <DataTableColumnHeader>Importance</DataTableColumnHeader>
                  <DataTableColumnHeader>Period type</DataTableColumnHeader>
                  <DataTableColumnHeader>Public access</DataTableColumnHeader>
                  <DataTableColumnHeader>Last updated</DataTableColumnHeader>
                </DataTableRow>
              </TableHead>
              <TableBody>
                {validationRuleResponse.list.map((validationRule) => (
                  <DataTableRow>
                    <DataTableCell>{validationRule.name}</DataTableCell>
                    <DataTableCell>{validationRule.importance}</DataTableCell>
                    <DataTableCell>{validationRule.periodType}</DataTableCell>
                    <DataTableCell>{validationRule.publicAccess}</DataTableCell>
                    <DataTableCell>{validationRule.lastUpdated}</DataTableCell>
                  </DataTableRow>
                ))}
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
