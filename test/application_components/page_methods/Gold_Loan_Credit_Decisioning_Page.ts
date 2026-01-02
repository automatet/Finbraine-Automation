import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class Gold_Loan_Credit_Decisioning_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;

 
  

  //**Declare */

  readonly txt_security_details_title: Locator;
  readonly txt_type_in_security_details: Locator;
  readonly txt_category_in_security_details: Locator;
  readonly txt_hallmark_in_security_details: Locator;
  readonly txt_security_value_in_security_details: Locator;
  readonly txt_loan_to_value_in_percentage_in_security_details: Locator;
  readonly txt_amount_to_be_considered_in_security_details: Locator;
  readonly txt_security_available_date_range_in_security_details: Locator;
  readonly txt_security_ownership_details_in_security_details: Locator;
  readonly txt_ownership_type_in_security_details: Locator;
  readonly txt_ownership_percentage_in_security_details: Locator;
  readonly txt_margin_in_security_details: Locator;

  //Gold Valuation Details 2 Stree Dhan

  readonly txt_name_in_stree_dhan: Locator;
  readonly txt_address_in_stree_dhan: Locator;
  readonly txt_age_in_stree_dhan: Locator;



readonly txt_remarks: Locator;
readonly txt_nominee_details_title: Locator;
readonly txt_nominee_name: Locator;
readonly txt_nominee_age: Locator;
readonly txt_nominee_mobile_number: Locator;
readonly txt_relation_with_applicant: Locator;
readonly txt_nominee_gender: Locator;
readonly txt_nominee_address: Locator;
readonly btn_deviation_type_add_a_line_button: Locator;
readonly txt_deviation_type: Locator;
readonly txt_deviation_comment: Locator;
readonly btn_deviation_verify_button: Locator;
readonly txt_request_corrections: Locator;
readonly txt_ho_recommendation_and_remark: Locator;
readonly txt_additional_comment_by_ho: Locator;












readonly credit_decisioning_tab:Locator 
readonly customer_name_in_kyc_and_due_diligence:Locator;
readonly borrowers_address_in_kyc_and_due_diligence:Locator;
readonly current_address_in_kyc_and_due_diligence:Locator;
readonly gender_in_kyc_and_due_diligence:Locator;
readonly borrowers_age_in_kyc_and_due_diligence:Locator;
readonly email_in_kyc_and_due_diligence:Locator;
readonly signature_in_kyc_and_due_diligence:Locator;
readonly customer_id_in_kyc_and_due_diligence:Locator;
readonly kyc_status_in_kyc_and_due_diligence:Locator;
readonly kyc_date_in_kyc_and_due_diligence:Locator;
readonly ckyc_number_in_kyc_and_due_diligence:Locator;
readonly pan_number_in_kyc_and_due_diligence:Locator;
readonly adhaaar_number_in_kyc_and_due_diligence:Locator;



readonly txt_loan_schedule_title:Locator;
  readonly txt_product_name: Locator;
  readonly txt_total_repayment_amount: Locator;
  readonly txt_rate_of_interest: Locator;
  readonly txt_maturity_date: Locator;
  readonly txt_loan_amount: Locator;
  readonly txt_repayment_type: Locator;
  readonly txt_emi_amount: Locator;
  readonly txt_tenure_months: Locator;
  readonly txt_total_interest: Locator;
  readonly txt_loan_schedule_date: Locator;
  readonly txt_loan_scrutiny_title: Locator;
  readonly txt_total_quotation_amount: Locator;
  readonly txt_remaining_margin_amount: Locator;
  readonly txt_scrutiny_loan_amount: Locator;
  readonly txt_scrutiny_entire_amount: Locator;
  
  
  readonly txt_additional_comment: Locator;
  readonly btn_approve_button: Locator;
  readonly btn_reject_button: Locator;



  readonly Type_in_primarySecurityDetails: Locator;
  readonly Category_in_primarySecurityDetails: Locator;
  readonly Total_Quotation_Value_in_primarySecurityDetails: Locator;
  readonly txt_Loan_to_Valuein_in_primarySecurityDetails: Locator;
  readonly Security_Value_in_primarySecurityDetails: Locator;
  readonly Amount_to_be_Consideredin_primarySecurityDetails: Locator;
  readonly Security_Description_in_primarySecurityDetails: Locator;
  readonly txt_Security_Available_Date_Range_in_primarySecurityDetails: Locator;
  readonly Property_Location_in_primarySecurityDetails: Locator;
  readonly Branch_Address_in_primarySecurityDetails: Locator;
  readonly Security_Ownership_Details_in_primarySecurityDetails: Locator;
  readonly Ownership_Type_in_primarySecurityDetails: Locator;
  readonly Ownership_Percentage_in_primarySecurityDetails: Locator;
  readonly Bank_LTV_in_primarySecurityDetails: Locator;
  readonly Margin__in_primarySecurityDetails: Locator;
  readonly Type_in_Collateral_Security_Details: Locator;
  readonly Category_in_Collateral_Security_Details: Locator;
  readonly Security_Value_in_Collateral_Security_Details: Locator;
  readonly Half_Cut_in_Collateral_Security_Details: Locator;
  readonly Amount_to_be_Considered_in_Collateral_Security_Details: Locator;
  readonly Collateral_Description_in_Collateral_Security_Details: Locator;
  readonly Collateral_Security_Available_in_Collateral_Security_Details: Locator
  readonly Collateral_Property_in_Collateral_Security_Details: Locator
  readonly Address_in_Collateral_Security_Details: Locator
  readonly Security_Ownership_Details_in_Collateral_Security_Details: Locator
  readonly Ownership_Type_in_Collateral_Security_Details: Locator
  readonly Ownership_Percentage_in_Collateral_Security_Details: Locator
  readonly Market_LTV_in_Collateral_Security_Details: Locator
  readonly Bank_LTV_in_Collateral_Security_Details: Locator
  readonly txt_sector_code: Locator
  //readonly drpdwn_Priority_in_sector_code: Locator
  readonly txt_occupationcode: Locator;
  readonly txt_Purpose_of_advance: Locator
  readonly txt_Advance_type: Locator
  //readonly drpdwn_Advance_type: Locator
  readonly txt_weaker_code: Locator
 // readonly drpdwn_weaker_code: Locator
  readonly BorrowerCategory: Locator
  readonly Mode_of_Advance: Locator
  readonly txt_subsector_code: Locator
  readonly NatureofAdvance : Locator
readonly txt_Industry_type: Locator;
readonly SanctionAmount_in_Shares_and_charges: Locator;
readonly Shares_From_in_Shares_and_charges: Locator;  
readonly Shares_Number_in_Shares_and_charges: Locator;  
readonly Existing_Shares_Amount_in_Shares_and_charges: Locator;
readonly Total_Shares_Required_in_Shares_and_charges: Locator;
readonly Additional_Shares_Required_in_Shares_and_charges: Locator;
readonly Fees_Charges_in_Shares_and_charges: Locator;
readonly Details_of_Contingent_Charges_in_Shares_and_charges: Locator;
readonly Penal_Charges_for_Delayed_Payment_in_Shares_and_charges: Locator;
readonly Other_Penal_Charges_in_Shares_and_charges: Locator;
readonly Cibil_Charges__in_Shares_and_charges: Locator;
readonly processing_Fees_in_Shares_and_charges: Locator;
readonly Valuation_Charges_in_Shares_and_charges: Locator;
readonly Stamp_Charges_in_Shares_and_charges: Locator;
readonly Foreclosure_Charges_if_applicable_in_Shares_and_charges: Locator;  
readonly Charges_for_Switching_Loan_Rate_Type_in_Shares_and_charges: Locator;
readonly Recovery_Overdue_Notice_Charges_in_Shares_and_charges: Locator;
readonly Cheque_ECS_Return_SI_Execution_Failed_Charges_in_Shares_and_charges: Locator;  
readonly Franking_Charges_in_Shares_and_charges: Locator;
readonly Gross_Income_in_Loan_eligibility : Locator;  
readonly Total_Agricultural_Income_in_Loan_eligibility : Locator;
readonly Maximum_Allowable_Deduction_in_Loan_eligibility : Locator;
readonly Income_After_Maximum_Allowable_Deduction_in_Loan_eligibility : Locator;  
readonly Agriculture_Income_Multiplier_in_Loan_eligibility : Locator;
readonly Other_Income_Agriculture_in_Loan_eligibility : Locator;  
readonly Gross_Amount_of_Existing_Deductions_in_Loan_eligibility : Locator;
readonly Existing_Loan_EMI_in_Loan_eligibility : Locator;
readonly Net_Amount_Available_for_New_EMI_in_Loan_eligibility : Locator;  
 
readonly Total_Deduction_in_Loan_eligibility : Locator;
readonly DBR_in_Loan_eligibility : Locator;
readonly Total_Income_With_Existing_deduction_in_Loan_eligibility : Locator;
readonly Percentage_of_Available_Amount_In_Gross_Income_in_Loan_eligibility : Locator;  
readonly Growth_Trend_of_Income_in_Loan_eligibility : Locator;  
readonly Growth_Trend_of_Income_networth_in_Loan_eligibility : Locator;
readonly As_per_Income_Loan_Availability_in_Loan_eligibility : Locator;
 
readonly txt_Remarks_in_Loan_eligibility : Locator;
readonly EMI_for_Loan_in_Loan_eligiblity : Locator;





  
  /**
   * @param {Page} page
   * @param {TestInfo} testInfo
   * @param {PlaywrightFactoryActions} playwrightFactory
   * @param {DataFactory} dataFactory
   * @param {any} container
   * @param {DatabricksSQLwarehouse} databricks_sqlware;
   * @param {DatabricksFactoryDBFS} databricks_dbfs;
   */

  constructor(container: any) {
    this.container = container;
    this.page = container.resolve('page');
    this.testInfo = container.resolve('testInfo');
    this.playwrightFactory = container.resolve('playwrightFactory');
    this.dataFactory = container.resolve('dataFactory');
    this.databricks_sqlware = container.resolve('databricks_sqlware');
    this.databricks_dbfs = container.resolve('databricks_dbfs');


    
    /******************** Page Objects for gold loan credit decisioning ************************/

    this.txt_security_details_title=this.page.locator("(//span[contains(text(),'Security Details')])[1]")
    this.txt_type_in_security_details=this.page.locator("//span[@name='type_given']")
    this.txt_category_in_security_details=this.page.locator("//span[@name='gold_category']")
    this.txt_hallmark_in_security_details=this.page.locator("//select[@name='hallmark']")
    this.txt_security_value_in_security_details=this.page.locator("//span[@name='security_value']")
    this.txt_loan_to_value_in_percentage_in_security_details=this.page.locator("//span[@name='loan_to_value']")
    this.txt_amount_to_be_considered_in_security_details=this.page.locator("//span[@name='amount_to_be_considered']")
    this.txt_security_available_date_range_in_security_details=this.page.locator("//span[@name='security_available_date_range']")
    this.txt_security_ownership_details_in_security_details=this.page.locator("//span[@name='security_ownership_details']")
    this.txt_ownership_type_in_security_details=this.page.locator("(//span[@name='ownership_type'])[1]")
    this.txt_ownership_percentage_in_security_details=this.page.locator("(//span[@name='ownership_percentage'])[1]")
    this.txt_margin_in_security_details=this.page.locator("//span[@name='security_margin']")

    //Gold Valuation Details 2 Stree Dhan

    this.txt_name_in_stree_dhan=this.page.locator("")
    this.txt_address_in_stree_dhan=this.page.locator("(//span[@name='gold_address2'])[2]")
    this.txt_age_in_stree_dhan=this.page.locator("")


    
    /*******************************************************************************************/

    this.txt_remarks=this.page.locator("//input[@name='mpbf_remarks']")

    this.credit_decisioning_tab= this.page.locator("//a[normalize-space()='Credit Decisioning']")
    this.customer_name_in_kyc_and_due_diligence= this.page.locator("//input[@name='kyc_customer_name']")
    this.borrowers_address_in_kyc_and_due_diligence= this.page.locator('//input[@name="kyc_customer_borrower_address"]')
    this.current_address_in_kyc_and_due_diligence= this.page.locator('//input[@name="kyc_current_address"]')
    this.gender_in_kyc_and_due_diligence= this.page.locator('//input[@name="kyc_customer_gender"]')
    this.borrowers_age_in_kyc_and_due_diligence= this.page.locator('//input[@name="kyc_customer_borrower_age"]')
    this.email_in_kyc_and_due_diligence= this.page.locator('//input[@name="kyc_customer_email"]')
    this.signature_in_kyc_and_due_diligence= this.page.locator('')
    this.customer_id_in_kyc_and_due_diligence= this.page.locator('//input[@name="kyc_customer_id"]')
    this.kyc_status_in_kyc_and_due_diligence= this.page.locator('//select[@name="kyc_status"]')
    this.kyc_status_in_kyc_and_due_diligence= this.page.locator('//option[@value="compliant"]')
    this.kyc_date_in_kyc_and_due_diligence= this.page.locator("//input[@name='kyc_date_due_diligence']")
    this.ckyc_number_in_kyc_and_due_diligence= this.page.locator("//label[@for='o_field_input_3546']")
    this.pan_number_in_kyc_and_due_diligence= this.page.locator('//span[@name="kyc_customer_pan_document"]')
    this.adhaaar_number_in_kyc_and_due_diligence= this.page.locator('//span[@name="kyc_customer_aadhaar_document"]')


    this.txt_loan_schedule_title=this.page.locator("//div[normalize-space()='Loan Schedule']");
    this.txt_product_name=this.page.locator("//span[@name='updated_product_name']");
    this.txt_total_repayment_amount=this.page.locator("//span[@name='updated_outstanding_amount']");
    this.txt_rate_of_interest=this.page.locator("//span[@name='updated_rate_of_interest']");
    this.txt_maturity_date=this.page.locator("//span[@name='updated_maturity_date']");
    this.txt_loan_amount=this.page.locator("(//span[@name='updated_loan_amount'])[1]")
    this.txt_repayment_type=this.page.locator("//span[@name='repayment_type']")
    this.txt_emi_amount=this.page.locator("//span[@name='emi_amount']")
    this.txt_tenure_months=this.page.locator("(//span[@name='updated_tenure'])[2]")
    this.txt_total_interest=this.page.locator("//span[@name='total_interest']")
    this.txt_loan_schedule_date=this.page.locator("//span[@name='loan_schedule_date']")
    this.txt_loan_scrutiny_title=this.page.locator("//div[normalize-space()='Loan Scrutiny']")
    this.txt_total_quotation_amount=this.page.locator("(//span[@name='customer_quotation_amt'])[2]")
    this.txt_remaining_margin_amount=this.page.locator("//span[@name='remaining_margin_amount']")
    this.txt_scrutiny_loan_amount=this.page.locator("(//span[@name='updated_loan_amount'])[2]")
    this.txt_scrutiny_entire_amount=this.page.locator("//span[@name='entire_amount']")
   
    this.txt_additional_comment=this.page.locator("//input[@name='additional_comment']")
    this.btn_approve_button=this.page.locator("//button[@name='approve_decision']")
    this.btn_reject_button=this.page.locator("//button[@name='reject_decision']")

    this.Type_in_primarySecurityDetails = this.page.locator('//span[@name="vehicle_type_given"][contains(text(),"Vehicle")]')
    this.Category_in_primarySecurityDetails = this.page.locator('//span[@name="vehicle_category"][contains(text(),"Regular")]')
    this.Total_Quotation_Value_in_primarySecurityDetails = this.page.locator('//span[@name="total_quotation_value"]')
    this.txt_Loan_to_Valuein_in_primarySecurityDetails = this.page.locator('//input[@name="vehicle_loan_to_value"]')
    this.Security_Value_in_primarySecurityDetails = this.page.locator('//span[@name="vehicle_security_value"]')
    this.Amount_to_be_Consideredin_primarySecurityDetails = this.page.locator('//span[@name="vehicle_amount_to_be_considered"]')
    this.Security_Description_in_primarySecurityDetails = this.page.locator('//span[@name="security_description"]')
    this.txt_Security_Available_Date_Range_in_primarySecurityDetails = this.page.locator('//input[@name="security_available_date_range"]')
    this.Property_Location_in_primarySecurityDetails = this.page.locator('//span[@name="vehicle_property_location"]')
    this.Branch_Address_in_primarySecurityDetails = this.page.locator('//span[@name="customer_vehicle_address"]')
    this.Security_Ownership_Details_in_primarySecurityDetails = this.page.locator('//*[contains(text(),"Security Details")]/ancestor::div[@class="o_group outer-box o_invisible_modifier"]//following::table[@class="o_group o_inner_group o_group_col_6"]//span[@name="security_ownership_details"]')
    this.Ownership_Type_in_primarySecurityDetails = this.page.locator('//*[contains(text(),"Security Details")]/ancestor::div[@class="o_group outer-box o_invisible_modifier"]//following::table[@class="o_group o_inner_group o_group_col_6"]//span[@name="ownership_type"]')
    this.Ownership_Percentage_in_primarySecurityDetails = this.page.locator('//*[contains(text(),"Security Details")]/ancestor::div[@class="o_group outer-box o_invisible_modifier"]//following::table[@class="o_group o_inner_group o_group_col_6"]//span[@name="ownership_percentage"]')
    this.Bank_LTV_in_primarySecurityDetails = this.page.locator('//span[@name="vehicle_bank_ltv"]')
    this.Margin__in_primarySecurityDetails = this.page.locator('//span[@name="vehicle_security_margin"]')
    this.Type_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_type_given"]')
    this.Category_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_vehicle_category"]')
    this.Security_Value_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_security_value"]')
    this.Half_Cut_in_Collateral_Security_Details = this.page.locator('//input[@name="collateral_half_cut"]')
    this.Amount_to_be_Considered_in_Collateral_Security_Details = this.page.locator('//input[@name="collateral_amount_to_be_considered"]')
    this.Collateral_Description_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_description"]')
    this.Collateral_Security_Available_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_security_available"]')
    this.Collateral_Property_in_Collateral_Security_Details = this.page.locator('//input[@name="collateral_property_location"]')
    this.Address_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_address"]')
    this.Security_Ownership_Details_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_security_ownership_details"]')
    this.Ownership_Type_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_ownership_type"]')
    this.Ownership_Percentage_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_ownership_percentage"]')
    this.Market_LTV_in_Collateral_Security_Details = this.page.locator('//span[@name="collateral_market_ltv"]')
    this.Bank_LTV_in_Collateral_Security_Details = this.page.locator('//input[@name="collateral_bank_ltv"]')
    //mis//
    this.txt_sector_code = this.page.locator('//div[@name="sector_code"]')
  // this.txt_sector_code = this.page.locator('//div[@class="o_input_dropdown"]//following::div[@name="sector_code"]')
    this.txt_occupationcode=this.page.locator('//select[@name="occupation_code"]')
    this.txt_Purpose_of_advance = this.page.locator('//div[@name="purpose_of_advance"]')
   
    this.txt_Advance_type = this.page.locator('//select[@name="advance_type"]')
   
    this.txt_weaker_code = this.page.locator('//div[@name="weaker_code"]')
   
    this.BorrowerCategory = this.page.locator("//span[@name='borrower_category']")
    this.Mode_of_Advance = this.page.locator("//span[@name='mode_of_advance'][contains(text(),'Direct Finance')]")
    this.txt_subsector_code = this.page.locator('//div[@name="subsector_code"]')
    this.NatureofAdvance = this.page.locator('//span[@name="nature_of_advance"][contains(text(),"Secured")]')
    this.txt_Industry_type = this.page.locator('//div[@name="industry_type"]')
    //loan eligibility///
    this.Gross_Income_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="gross_salary"]')
    this.Total_Agricultural_Income_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="total_agricultural_income"]')
    this.Maximum_Allowable_Deduction_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="maximum_allowable_deduction_percentage"]')
   
    this.Income_After_Maximum_Allowable_Deduction_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="maximum_allowable_deduction"]')
    this.Agriculture_Income_Multiplier_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="other_income_multiplier"]')
   
    this.Other_Income_Agriculture_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='other_income_amount']")
    this.Gross_Amount_of_Existing_Deductions_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='salary_deduction']")
    this.Existing_Loan_EMI_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='existing_loan_emi']")
    this.Net_Amount_Available_for_New_EMI_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='total_amount_available_for_deduction'] ")
    this.EMI_for_Loan_in_Loan_eligiblity = this.page.locator("//div[@class='o_group outer-box2']//span[@name='emi_of_new_loan']")
    this.Total_Deduction_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='total_deduction'] ")
    this.DBR_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='percentage_to_total_deduction']")
    this.Total_Income_With_Existing_deduction_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='net_salary_after_deduction']")
    this.Percentage_of_Available_Amount_In_Gross_Income_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='percentage_of_available_amount']")
    this.Growth_Trend_of_Income_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='growth_trend_of_income']")
    this.Growth_Trend_of_Income_networth_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='growth_trend_of_income_networth']")
    this.As_per_Income_Loan_Availability_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='income_Loan_Availability']")
    this.txt_Remarks_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[name="remarks"]')
   
   
    //shares and charges//
    this.SanctionAmount_in_Shares_and_charges = this.page.locator("//span[@name='sanction_amount']")
    this.Shares_From_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='share_from']")
    this.Shares_Number_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='no_of_shares']")
    this.Existing_Shares_Amount_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='existing_share_amt']")
    this.Total_Shares_Required_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='total_share_req']")
    this.Additional_Shares_Required_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='additional_share_req']")
    this.Fees_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_fees_charges']")
    this.Details_of_Contingent_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_contingent_charges']")
    this.Penal_Charges_for_Delayed_Payment_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_penal_charges_percent']")
    this.Other_Penal_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_other_penal_charges']")
    this.Cibil_Charges__in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cibil_charges']")
    this.processing_Fees_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='processing_fees']")
    this.Valuation_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='valuation_charges']")
    this.Stamp_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='stamp_charges']")
    this.Foreclosure_Charges_if_applicable_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_foreclosure_charges']")
    this.Charges_for_Switching_Loan_Rate_Type_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_switching_charges']")
    this.Recovery_Overdue_Notice_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_recovery_charges']")
    this.Cheque_ECS_Return_SI_Execution_Failed_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_return_charges']")
    this.Franking_Charges_in_Shares_and_charges = this.page.locator("//span[text()='Shares and Charges']/ancestor::h1[@class='outer-title']//following-sibling::div[@class='o_group outer-box']//span[@name='cred_franking_charges']")
   

    //Nominee Details//

    this.txt_nominee_details_title = this.page.locator("//span[normalize-space()='Nominee Details']")
    this.txt_nominee_name=this.page.locator("//span[@name='nominee_name']")
    this.txt_nominee_age=this.page.locator("//span[@name='nominee_age']")
    this.txt_nominee_mobile_number=this.page.locator("//span[@name='nominee_mobile_number']")
    this.txt_relation_with_applicant=this.page.locator("//span[@name='nominee_relation_with_applicant']")
    this.txt_nominee_gender=this.page.locator("//span[@name='nominee_gender']")
    this.txt_nominee_address=this.page.locator("//span[@name='nominee_address']")

    //Deviations//

    //this.btn_deviation_type_add_a_line_button=this.page.locator("(//td[contains(@class,'o_field_x2many_list_row_add')]//a[normalize-space()='Add a line'])[7]")
    this.btn_deviation_type_add_a_line_button=this.page.locator('//*[contains(text(),"Add a line")]/following::div[@name="deviation_line_ids"]//*[contains(text(),"Add a line")]')
    this.txt_deviation_type=this.page.locator("//select[@name='deviation_type']")
    this.txt_deviation_comment=this.page.locator("//textarea[@name='comment']")
    this.btn_deviation_verify_button=this.page.locator("//div[@name='verify_deviation']")

    //Loan Recommendation by HO//

    this.txt_request_corrections=this.page.locator("//textarea[@name='request_corrections']")
    this.txt_ho_recommendation_and_remark=this.page.locator("//textarea[@name='ho_reommandation_and_remark']")
    this.txt_additional_comment_by_ho=this.page.locator("//textarea[@name='additional_comment_by_ho_for_any_deviation']")




  }
  

async user_verify_security_details_title(){
  await expect(this.txt_security_details_title).toBeVisible()
}

async user_verify_type_in_security_details(){
  await expect(this.txt_type_in_security_details).toBeVisible()
}

async user_verify_category_in_security_details(){
  await expect(this.txt_category_in_security_details).toBeVisible()
}

async user_selects_hallmark_in_security_details(){
await this.txt_hallmark_in_security_details.selectOption({label:'Yes'})
}

async user_verify_security_value_in_security_details(){
  await expect(this.txt_security_value_in_security_details).toBeVisible()
}

async user_verify_loan_to_value_in_security_details(){
  await expect(this.txt_loan_to_value_in_percentage_in_security_details).toBeVisible()
}

async user_verify_amount_to_be_considered_in_security_details(){
  await expect(this.txt_amount_to_be_considered_in_security_details).toBeVisible()
}

async user_verify_security_available_date_range_in_security_details(){
  await expect(this.txt_security_available_date_range_in_security_details).toBeVisible()
}

async user_verify_security_ownership_details_in_security_details(){
  await expect(this.txt_security_ownership_details_in_security_details).toBeVisible()
}

async user_verify_ownership_type_in_security_details(){
  await expect(this.txt_ownership_type_in_security_details).toBeVisible()
}

async user_verify_ownership_percentage_in_security_details(){
  await expect(this.txt_ownership_percentage_in_security_details).toBeVisible()
}

async user_verify_margin_in_security_details(){
  await expect(this.txt_margin_in_security_details).toBeVisible()
}













































async user_enter_remarks(strremarks: string){
  await this.playwrightFactory.fill(this.txt_remarks, strremarks)
}

async user_selects_Sector_Code_in_MIS(){
  //await this.playwrightFactory.click(this.txt_sector_code);
  await this.txt_sector_code.click();
  await this.page.locator("//ul[contains(@class,'ui-menu')]//a[normalize-space(.)='Priority']").click();
 
    
}

async user_selects_Occupation_Code_in_MIS(){
await this.txt_occupationcode.selectOption({label:'Salaried'})
}

async user_selects_Purpose_Of_Advance_MIS(){
//await this.txt_Purpose_of_advance.selectOption({label:'Real Estate Speculation Loans'})
await this.txt_Purpose_of_advance.click();
await this.page.locator("//a[contains(text(),'Real Estate Speculation Loans')]").click();
}

async user_selects_Advance_Type_in_MIS(){
await this.txt_Advance_type.selectOption({label:'EMI'})
}

async user_selects_Weaker_Code_in_MIS(){
//await this.txt_weaker_code.selectOption({label:'Weaker Section Self Help Groups'})
await this.txt_weaker_code.click();
await this.page.locator("//a[contains(text(),'Weaker Section Self Help Groups')]").click();
}

async user_selects_Subsector_Code_in_MIS(){
//await this.txt_subsector_code.selectOption({label:'NON Pri.MICRO-ENT(SER)(ADV ABOVE RS 5CR)'})
await this.txt_subsector_code.click();
await this.page.locator("//a[contains(text(),'NON Pri.MICRO-ENT(SER)(ADV ABOVE RS 5CR')]").click();
}

async user_selects_Industry_Type_in_MIS(){
//await this.txt_Industry_type.selectOption({label:'Gems and Jewlry'})
await this.txt_Industry_type.click();
await this.page.locator("//a[contains(text(),'Gems and Jewlry')]").click();
}

async user_verify_nominee_details_title(){
  await expect(this.txt_nominee_details_title).not.toBeEmpty();
}

async user_verify_nominee_name(){
  await expect(this.txt_nominee_name).not.toBeEmpty();
}

async user_verify_nominee_age(){
  await expect(this.txt_nominee_age).not.toBeEmpty();
}

async user_verify_nominee_mobile_number(){
  await expect(this.txt_nominee_mobile_number).not.toBeEmpty();
}

async user_verify_nominee_relation_with_applicant(){
  await expect(this.txt_relation_with_applicant).not.toBeEmpty();
}

async user_verify_nominee_gender(){
  await expect(this.txt_nominee_gender).not.toBeEmpty();
}

async user_verify_nominee_address(){
  await expect(this.txt_nominee_address).not.toBeEmpty();
}


async user_click_add_line_btn_for_deviations_type(){
await this.playwrightFactory.click(this.btn_deviation_type_add_a_line_button);
}

async user_select_deviation_type(strDeviationtype: string){
await this.txt_deviation_type.selectOption({label:strDeviationtype});
}

async user_enter_deviation_comment(strDeductioncomment: string){
await this.playwrightFactory.fill(this.txt_deviation_comment, strDeductioncomment)
}

async user_enters_additional_comment(strAdditionalcomment: string){
await this.playwrightFactory.fill(this.txt_additional_comment, strAdditionalcomment);
}

async user_enters_request_corrections(strrequest: string){
  await this.playwrightFactory.fill(this.txt_request_corrections, strrequest)
}

async user_enters_ho_recommendation_and_remark(strhorecommendation: string){
  await this.playwrightFactory.fill(this.txt_ho_recommendation_and_remark, strhorecommendation)
}

async user_enters_additional_comment_by_ho(stradditionalcommentho: string){
  await this.playwrightFactory.fill(this.txt_ho_recommendation_and_remark, stradditionalcommentho)
}


async user_click_approve_button(){
await this.playwrightFactory.click(this.btn_approve_button);
}















 













async user_click_credit_decisioning_tab(){
  await this.playwrightFactory.click(this.credit_decisioning_tab);

}
async user_enter_customer_name_in_kyc_and_due_diligence(strname: string){
  await this.playwrightFactory.fill(this.customer_name_in_kyc_and_due_diligence, strname)
}
async user_enter_borrowers_address_in_kyc_and_due_diligence(strname: string){
  await this.playwrightFactory.fill(this.borrowers_address_in_kyc_and_due_diligence, strname)
}

async user_enter_current_address_in_kyc_and_due_diligence(strname: string){
  await this.playwrightFactory.fill(this.current_address_in_kyc_and_due_diligence, strname)
}

async user_enter_gender_in_kyc_and_due_diligence(strname: string){
  await this.playwrightFactory.fill(this.gender_in_kyc_and_due_diligence, strname)
}

async user_enter_email_in_kyc_and_due_diligence(strname: string){
  await this.playwrightFactory.fill(this.gender_in_kyc_and_due_diligence, strname)
}
async user_enter_signature_in_kyc_and_due_diligence(strname: string){
  await this.playwrightFactory.fill(this.signature_in_kyc_and_due_diligence, strname)
}
async user_verify_customer_id_in_kyc_and_due_diligence(){
  await expect(this.customer_id_in_kyc_and_due_diligence).toBeVisible()
}

async user_select_ckyc_status_in_kyc_and_due_diligence(strname: string){
  await this.kyc_status_in_kyc_and_due_diligence.selectOption({label:'Compliant'});
}

async user_enter_kyc_date_in_kyc_and_due_diligence(strdate: string){
  await this.playwrightFactory.fill(this.kyc_date_in_kyc_and_due_diligence, strdate)
}
async user_verify_ckyc_number(){
  await expect(this.ckyc_number_in_kyc_and_due_diligence).toBeVisible();
 
}
async user_verify_pan_number(){
  await expect(this.pan_number_in_kyc_and_due_diligence).toBeVisible();
 
}
async user_verify_aadhar_number(){
  await expect(this.adhaaar_number_in_kyc_and_due_diligence).toBeVisible();
 
}








async user_verify_loan_schedule_title(){
  await expect(this.txt_loan_schedule_title).toBeVisible();
}

async user_verify_product_name(){
  await expect(this.txt_product_name).toBeVisible();
}

async user_verify_total_repayment_amount(){
  await expect(this.txt_total_repayment_amount).toBeVisible();
}

async user_verify_rate_of_interest(){
  await expect(this.txt_rate_of_interest).toBeVisible();
}

async user_verify_maturity_date(){
  await expect(this.txt_maturity_date).toBeVisible();
}

async user_verify_loan_amount(){
  await expect(this.txt_loan_amount).toBeVisible();
}

async user_verify_repayment_type(){
  await expect(this.txt_repayment_type).toBeVisible();
}

async user_verify_emi_amount(){
  await expect(this.txt_emi_amount).toBeVisible();
}

async user_verify_tenure_months(){
  await expect(this.txt_tenure_months).toBeVisible();
}

async user_verify_total_interest(){
  await expect(this.txt_total_interest).toBeVisible();
}

async user_verify_loan_schedule_date(){
  await expect(this.txt_loan_schedule_date).toBeVisible();
}

async user_verify_loan_scrutiny_title(){
  await expect(this.txt_loan_scrutiny_title).toBeVisible();
}

async user_verify_total_quotation_amount(){
  await expect(this.txt_total_quotation_amount).toBeVisible();
}

async user_verify_remaining_margin_amount(){
  await expect(this.txt_remaining_margin_amount).toBeVisible();
}

async user_verify_scrutiny_loan_amount(){
  await expect(this.txt_scrutiny_loan_amount).toBeVisible();
}

async user_verify_entire_amount(){
  await expect(this.txt_scrutiny_entire_amount).toBeVisible();
}







async user_click_deviation_verify_button(){
await this.playwrightFactory.click(this.btn_deviation_verify_button);
}




async user_click_reject_button(){
await this.playwrightFactory.click(this.btn_reject_button);
}








async user_verify_Type_in_primary_security_details(){
  await expect(this.Type_in_primarySecurityDetails).toBeVisible
}
 
 
async user_verify_Categoryin_primary_security_details(){
  await expect(this.Category_in_Collateral_Security_Details).toBeVisible
 
}
async user_verify_Total_Quotation_Valuein_primary_security_details(){
  await expect(this.Total_Quotation_Value_in_primarySecurityDetails).toBeVisible
 
}
async user_verify_Security_Valuein_primary_security_details(){
  await expect(this.Security_Value_in_primarySecurityDetails).toBeVisible
 
 
}
async user_verify_Loan_to_Value_in_primary_security_details(){
  await expect(this.txt_Loan_to_Valuein_in_primarySecurityDetails).toBeVisible
 
}
async user_verify_Amount_to_be_Considered_in_primary_security_details(){
  await expect(this.Amount_to_be_Consideredin_primarySecurityDetails).toBeVisible
 
 
}
async user_verify_Security_Description_in_primary_security_details(){
  await expect(this.Security_Description_in_primarySecurityDetails).toBeVisible
 
 
}
async user_verify_Security_Available_Date_Range_in_primary_security_details(){
  await expect(this.txt_Security_Available_Date_Range_in_primarySecurityDetails).toBeVisible
 
 
}
async user_verify_Property_Location_in_primary_security_details(){
  await expect(this.Property_Location_in_primarySecurityDetails).toBeVisible()
 
 
}
async user_verify_Branch_Address_in_primary_security_details(){
  await expect(this.Branch_Address_in_primarySecurityDetails).toBeVisible()
 
 
}
async user_verify_Security_Ownership_Details_in_primary_security_details(){
  await expect(this.Security_Ownership_Details_in_primarySecurityDetails).toBeVisible()
 
 
}
async user_verify_Ownership_Type_Individual_in_primary_security_details(){
  await expect(this.Ownership_Type_in_primarySecurityDetails).toBeVisible()
 
 
}
async user_verify_Ownership_Percentagein_primary_security_details(){
  await expect(this.Ownership_Percentage_in_primarySecurityDetails).toBeVisible()
 
}
async user_verify_Bank_LTV_in_primary_security_details(){
  await expect(this.Bank_LTV_in_primarySecurityDetails).not.toBeEmpty()
 
}
 async user_verify_Margin_in_primary_security_details(){
  await expect(this.Margin__in_primarySecurityDetails).toBeVisible
 
}
 
 async user_verify_Type_in_Collateral_Security_Details(){
  await expect(this.Type_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Category_in_Collateral_Security_Details(){
  await expect(this.Category_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Security_Value_in_Collateral_Security_Details(){
  await expect(this.Security_Value_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Half_Cut_in_Collateral_Security_Details(){
  await expect(this.Half_Cut_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Amount_to_be_Considered_in_Collateral_Security_Details(){
  await expect(this.Amount_to_be_Considered_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Collateral_Description_in_Collateral_Security_Details(){
  await expect(this.Collateral_Description_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Collateral_Security_Available_in_Collateral_Security_Details(){
  await expect(this.Collateral_Security_Available_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Collateral_Property_in_Collateral_Security_Details(){
  await expect(this.Collateral_Property_in_Collateral_Security_Details).toBeVisible
 
}  
async user_verify_Address_in_Collateral_Security_Details(){
  await expect(this.Address_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Security_Ownership_Details_in_Collateral_Security_Details(){
  await expect(this.Security_Ownership_Details_in_Collateral_Security_Details).toBeVisible
 
}
async user_verify_Ownership_Type_in_Collateral_Security_Details(){
  await expect(this.Ownership_Type_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Ownership_Percentage_in_Collateral_Security_Details(){
  await expect(this.Ownership_Percentage_in_Collateral_Security_Details).toBeVisible
}
 async user_verify_Market_LTV_in_Collateral_Security_Details(){
  await expect(this.Market_LTV_in_Collateral_Security_Details).toBeVisible
}
async user_verify_Bank_LTV_in_Collateral_Security_Details(){
  await expect(this.Bank_LTV_in_Collateral_Security_Details).toBeVisible
}
 






async user_selects_Borrower_Category_in_MIS(){
await expect(this.BorrowerCategory).toBeVisible()
}
async user_selects_Mode_Of_Advance_in_MIS(){
await expect(this.Mode_of_Advance).toBeVisible();
}
async user_selects_Nature_Of_Advance_in_MIS(){
await expect(this.NatureofAdvance).toBeVisible();
}

 
async Verify_Gross_Income_in_loan_eligibility(){
await expect(this.Gross_Income_in_Loan_eligibility).not.toBeEmpty();
}
async Verify_Total_Agricultural_Income_in_loan_eligibility(){
await expect(this.Total_Agricultural_Income_in_Loan_eligibility).toBeVisible();
}
async Verify_Maximum_Allowable_Deduction_in_loan_eligibility(){
await expect(this.Maximum_Allowable_Deduction_in_Loan_eligibility).toBeVisible();
}
async Verify_Income_After_Maximum_Allowable_Deduction_in_loan_eligibility(){
await expect(this.Income_After_Maximum_Allowable_Deduction_in_Loan_eligibility).toBeVisible();
}
async Verify_Agriculture_Income_Multiplier_in_loan_eligibility(){
await expect(this.Agriculture_Income_Multiplier_in_Loan_eligibility).toBeVisible();
}
async Verify_Other_Income_Agriculture_in_loan_eligibility(){
await expect(this.Other_Income_Agriculture_in_Loan_eligibility).toBeVisible();
}
async Verify_Gross_Amount_of_Existing_Deductions_in_loan_eligibility(){
await expect(this.Gross_Amount_of_Existing_Deductions_in_Loan_eligibility).toBeVisible();
}
async Verify_Existing_Loan_EMI_in_loan_eligibility(){
await expect(this.Existing_Loan_EMI_in_Loan_eligibility).toBeVisible();
}
async Verify_Net_Amount_Available_for_New_EMI_in_loan_eligibility(){
await expect(this.Net_Amount_Available_for_New_EMI_in_Loan_eligibility).toBeVisible();
}
async Verify_EMI_for_Loan_in_loan_eligibility(){
await expect(this.EMI_for_Loan_in_Loan_eligiblity).toBeVisible();
}
 
async Verify_Total_Deduction_in_loan_eligibility(){
await expect(this.Total_Deduction_in_Loan_eligibility).toBeVisible();
}
async Verify_DBR_in_loan_eligibility(){
await expect(this.DBR_in_Loan_eligibility).toBeVisible();
}
async Verify_Total_Income_With_Existing_deduction_in_loan_eligibility(){
    await expect(this.Total_Income_With_Existing_deduction_in_Loan_eligibility).toBeVisible();
 
}
async Verify_Percentage_of_Available_Amount_In_Gross_Income_in_loan_eligibility(){
await expect(this.Percentage_of_Available_Amount_In_Gross_Income_in_Loan_eligibility).toBeVisible();
}
async Verify_Growth_Trend_of_Income_in_loan_eligibility(){
await expect(this.Growth_Trend_of_Income_in_Loan_eligibility).toBeVisible();
}
async Verify_Growth_Trend_of_Income_Networth_in_loan_eligibility(){
await expect(this.Growth_Trend_of_Income_networth_in_Loan_eligibility).toBeVisible();
}
 
async Verify_As_per_Income_Loan_Availability_in_loan_eligibility(){
await expect(this.As_per_Income_Loan_Availability_in_Loan_eligibility).toBeVisible();
}
//async Verify_Remarks_in_loan_eligibility(strremarks:string){
//await this.playwrightFactory.fill(this.txt_Remarks_in_Loan_eligibility,strremarks)
//}
async Verify_Remarks_in_loan_eligibility(){
await expect(this.txt_Remarks_in_Loan_eligibility).not.toBeEmpty()
}  
async Verify_Sanction_Amount_in_Shares_and_Charges(){
await expect(this.SanctionAmount_in_Shares_and_charges).toBeVisible();
}
async Verify_Shares_From_in_Shares_and_Charges(){
 await expect(this.Shares_From_in_Shares_and_charges).toBeVisible();  
}
async Verify_Shares_Number_in_Shares_and_Charges(){
await expect(this.Shares_Number_in_Shares_and_charges).toBeVisible();
}
async Verify_Existing_Shares_Amount(){
await expect(this.Existing_Shares_Amount_in_Shares_and_charges).toBeVisible();
}
async Verify_Total_Shares_Required_in_Shares_and_Charges(){
    await expect(this.Total_Shares_Required_in_Shares_and_charges).toBeVisible();
}
 
async Verify_Additional_Shares_Required_in_Shares_and_Charges(){
await expect(this.Additional_Shares_Required_in_Shares_and_charges).toBeVisible();    
}
async Verify_Fees_Charges_in_Shares_and_Charges(){
 await expect(this.Fees_Charges_in_Shares_and_charges).toBeVisible();  
}
async Verify_Details_of_Contingent_Charges_in_Shares_and_Charges(){
 await expect(this.Details_of_Contingent_Charges_in_Shares_and_charges).toBeVisible();  
}
async Verify_Penal_Charges_for_Delayed_Payment_in_Shares_and_Charges(){
    await expect(this.Penal_Charges_for_Delayed_Payment_in_Shares_and_charges).toBeVisible();
}
async Verify_Other_Penal_Charges_in_Shares_and_Charges(){
    await expect(this.Other_Penal_Charges_in_Shares_and_charges).toBeVisible();
}
 
async Verify_Cibil_Charges_in_Shares_and_Charges(){
    await expect(this.Cibil_Charges__in_Shares_and_charges).toBeVisible();
}
async Verify_Processing_Fees_in_Shares_and_Charges(){
await expect(this.processing_Fees_in_Shares_and_charges).toBeVisible();
}
async Verify_Valuation_Charges_in_Shares_and_Charges(){
    await expect(this.Valuation_Charges_in_Shares_and_charges).toBeVisible();
}
async Verify_Stamp_Charges_in_Shares_and_Charges(){
    await expect(this.Stamp_Charges_in_Shares_and_charges).toBeVisible();
}
async Verify_Foreclosure_Charges_applicable_in_Shares_and_Charges(){
    await expect(this.Foreclosure_Charges_if_applicable_in_Shares_and_charges).toBeVisible();
}
async Verify_Charges_for_Switching_oanRate_Type_in_Shares_and_Charges(){
    await expect(this.Charges_for_Switching_Loan_Rate_Type_in_Shares_and_charges).toBeVisible();
}
async Verify_Recovery_Overdue_Notice_Charges_in_Shares_and_Charges(){
 await expect(this.Recovery_Overdue_Notice_Charges_in_Shares_and_charges).toBeVisible();  
}
async Verify_Cheque_ECS_ReturnSI_Execution_Failed_Charges_in_Shares_and_Charges(){
    await expect(this.Cheque_ECS_Return_SI_Execution_Failed_Charges_in_Shares_and_charges).toBeVisible();
}
async Verify_Franking_Charges_in_Shares_and_Charges(){
    await expect(this.Franking_Charges_in_Shares_and_charges).toBeVisible();
}

































































}

