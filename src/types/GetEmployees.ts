/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEmployees
// ====================================================

export interface GetEmployees_employees {
  __typename: "employees";
  birth_date: any;
  emp_no: number;
  first_name: string;
  hire_date: any;
  last_name: string;
}

export interface GetEmployees {
  /**
   * fetch data from the table: "employees"
   */
  employees: GetEmployees_employees[];
}
