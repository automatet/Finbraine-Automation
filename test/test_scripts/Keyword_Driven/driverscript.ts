import Container  from '../../utilities/container'; // Replace with the correct path to your Container class
import  {test, TestInfo } from '@playwright/test';
import {Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import { PlaywrightFactoryActionsAPI } from '../../utilities/playwright_factory_actions_API';
import { TrackShipmentAPI } from '../../application_components/page_apis/trax_trackshipmet_apis';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';
import { PowerBI_Actions } from '../../utilities/powerbi';
import { AppInsightsKQLExecutor } from '../../utilities/azure_appinsights';
import { AzureAppInsights } from '../../application_components/page_apis/azure_appinsights_apis';

import { TUTORIALS_PAGE } from '../../application_components/page_methods/Tutorials_Page';
import { Login_Page } from '../../application_components/page_methods/CMS_Login_Page';
import { CMS_Dashboard_Page } from '../../application_components/page_methods/CMS_Dashboard_Page';
import { Loan_Application_Tab_Page } from '../../application_components/page_methods/Loan_Application_Tab_Page';
import { Application_Overview_Page } from '../../application_components/page_methods/Application_Overview_Page';
import { Credit_Decisioning_Page } from '../../application_components/page_methods/Credit_Decisioning_Page';
import { Loan_Sanction_Page } from '../../application_components/page_methods/Loan_Sanction_Page';
import { Gold_Loan_Loan_Application_Tab_Page } from '../../application_components/page_methods/Gold_Loan_Loan_Application_Tab_Page';
import { Gold_Loan_Credit_Decisioning_Page } from '../../application_components/page_methods/Gold_Loan_Credit_Decisioning_Page';
import { Gold_Loan_Loan_Sanction_Page } from '../../application_components/page_methods/Gold_Loan_Loan_Sanction_Page';
import { Vehicle_Loan_Salaried_Guarantor_Details_Page } from '../../application_components/page_methods/Vehicle_Loan_Salaried_Guarantor_Details_Page';
import { Personloan_Loan_Application_Page } from '../../application_components/page_methods/Personloan_Loan_Application_Page';
import { Personloan_Credit_Decisioning_Page } from '../../application_components/page_methods/Personloan_Credit_Decisioning_Page';
import { Personloan_Loan_Sanction_Page } from '../../application_components/page_methods/Personloan_Loan_Sanction_Page';
import { Co_Borrower_Page } from '../../application_components/page_methods/Co_Borrower_Page';
import { Guarantor_details_page } from '../../application_components/page_methods/Guarantor_details_page';


export class DriverScript {

  async registerContainer(container: Container, testInfo :TestInfo) {
    container.register('testInfo', testInfo);
    container.register('playwrightFactory', new PlaywrightFactoryActions(container));
    container.register('playwrightAPIFactory', new PlaywrightFactoryActionsAPI(container));
    container.register('databricks_sqlware', new DatabricksSQLwarehouse(container));
    container.register('databricks_dbfs', new DatabricksFactoryDBFS(container));
    container.register('powerbi', new PowerBI_Actions(container));
    container.register('azure_appinsights', new AppInsightsKQLExecutor(container));
    container.register('azure_appinsights_apis', new AzureAppInsights(container));
    
    
    /* UI Page Methods*/
    
        
    container.register('Tutorials_Page', new TUTORIALS_PAGE(container));
    container.register('CMS_Login_Page', new Login_Page(container));
    container.register('CMS_Dashboard_Page', new CMS_Dashboard_Page(container));
    container.register('Loan_Application_Tab_Page', new Loan_Application_Tab_Page(container));
    container.register('Application_Overview_Page', new Application_Overview_Page(container));
    container.register('Credit_Decisioning_Page', new Credit_Decisioning_Page(container));
    container.register('Loan_Sanction_Page', new Loan_Sanction_Page(container));
    container.register('Gold_Loan_Loan_Application_Tab_Page', new Gold_Loan_Loan_Application_Tab_Page(container));
    container.register('Gold_Loan_Credit_Decisioning_Page', new Gold_Loan_Credit_Decisioning_Page(container));
    container.register('Gold_Loan_Loan_Sanction_Page', new Gold_Loan_Loan_Sanction_Page(container));
    container.register('Vehicle_Loan_Salaried_Guarantor_Details_Page', new Vehicle_Loan_Salaried_Guarantor_Details_Page(container));
 container.register('Personloan_Loan_Application_Page', new Personloan_Loan_Application_Page(container));
container.register('Personloan_Credit_Decisioning_Page', new Personloan_Credit_Decisioning_Page(container));
container.register('Personloan_Loan_Sanction_Page', new Personloan_Loan_Sanction_Page(container));
 container.register('Co_Borrower_Page', new Co_Borrower_Page(container));
 container.register('Guarantor_details_page', new Guarantor_details_page(container));




    
     


  
    
    
    /* API Page Methods*/
    container.register('trax_trackshipmet_apis', new TrackShipmentAPI(container));
    
    /* Add your New Page Methods Details Here -> Format -> container.register('FILE_NAME', new CLASS_NAME(container)); -> Then import the file by using quick fix*/
  }

  async execute(businessFlow: Record<string, string>, container: Container) {
    const rows: string[] = [];

    for (const key of Object.keys(businessFlow)) {
      if (key.includes("Keyword_")) {
        if (businessFlow[key] != "" && businessFlow[key] != null) {
          rows.push(businessFlow[key]);
        } else {
          break;
        }
      }
    }

    for (const row of rows) {
      const [keyword, ...params] = row.split(',');

      if (keyword) {
        const functionInstance = container.resolve(keyword.split(".")[0]);
        await test.step("Step:- "+keyword.split(".")[1].toUpperCase()+" :"+params.join(', '), async () => {
          container.register('stepname', "Step:- "+keyword.split(".")[1].toUpperCase());
          await this.callMethodOnObject(functionInstance, keyword.split(".")[1].split("${")[0],...params)
        });
      }
    }
  }

  async callMethodOnObject(functionInstance:any , methodName: string, ...params: any[]) {
    if (functionInstance) {
      const method = functionInstance[methodName];
      if (typeof method === "function") {
        await method.apply(functionInstance, params);
      } else {
        throw new Error(`Method '${methodName}' not found on page '${functionInstance}'`);
      }
    } else {
      throw new Error(`Page '${functionInstance}' not found in mapping`);
    }
  }
}

