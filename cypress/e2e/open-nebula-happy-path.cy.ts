describe('OpenNebula Happy Path', () => {});

/* ==== Test Created with Cypress Studio ==== */
it('test', function() {
  /* ==== Generated with Cypress Studio ==== */


  cy.visit('/fireedge/sunstone');

  cy.get('[data-cy="login-user"]').type("oneadmin");

  cy.get('[data-cy="login-token"]').type("admin");

  cy.get('[data-cy="login-button"]').click();
  /* ==== End Cypress Studio ==== */


  /* ==== Generated with Cypress Studio ==== */
  /* ==== Host ==== */
  cy.get('.css-1fgrji7 > .MuiButtonBase-root > svg').click();
  cy.get('[data-cy="infrastructure"] > .MuiTypography-root').click();
  cy.get(':nth-child(2) > .MuiListItemText-root > [data-cy="main-menu-item-text"]').click();
  cy.get('[data-cy="action-host_create_dialog"]').click();
  cy.get('[value="kvm"]').click();
  cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiFormControl-root').click();
  cy.get('[data-cy="general-information-hostname"]').clear();
  cy.get('[data-cy="general-information-hostname"]').type('localhost');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('.css-1qr2nml').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  /* ==== End Cypress Studio ==== */

  /* ==== Generated with Cypress Studio ==== */
  /* ==== Image ==== */
  cy.get('.css-1fgrji7 > .MuiButtonBase-root > svg').click();
  cy.get('[data-cy="storage"] > .MuiTypography-root').click();
  cy.get('[style="min-height: 0px; height: auto; transition-duration: 324ms;"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root > [data-cy="main-menu-item-text"]').click();
  cy.get('[data-cy="action-image_create_dialog"]').click();
  cy.get('[data-cy="general-NAME"]').type('Ubuntu 24.04 Server Image');
  cy.get('[data-cy="general-PATH"]').type('https://cloud-images.ubuntu.com/releases/noble/release/ubuntu-24.04-server-cloudimg-amd64.img');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="datastore-1"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.url().should('eq', `${cy.config('baseUrl')}/fireedge/sunstone/image`);
  /* ==== End Cypress Studio ==== */


  /* ==== Generated with Cypress Studio ==== */
  /* ==== Network ==== */
  cy.get('.css-1fgrji7 > .MuiButtonBase-root > svg').click();
  cy.get('[data-cy="networks"] > .MuiTypography-root').click();
  cy.get(':nth-child(7) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1)').click();
  cy.get('[data-cy="action-vnet-create_dialog"]').click();
  cy.get('[data-cy="general-information-NAME"]').clear('P');
  cy.get('[data-cy="general-information-NAME"]').type('Private Network');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="configuration-PHYDEV_SWITCH"]').check();
  cy.get('[data-cy="tab-addresses"]').click();
  cy.get('[data-cy="add-ar"]').click();
  cy.get('[data-cy="undefined-IP"]').clear('1');
  cy.get('[data-cy="undefined-IP"]').type('192.168.1.100');
  cy.get('[data-cy="undefined-SIZE"]').clear('2');
  cy.get('[data-cy="undefined-SIZE"]').type('20');
  cy.get('[data-cy="dg-accept-button"]').click();
  cy.get('[data-cy="tab-context"]').click();
  cy.get('[data-cy="context-NETWORK_ADDRESS"]').clear('1');
  cy.get('[data-cy="context-NETWORK_ADDRESS"]').type('192.168.1.0');
  cy.get('[data-cy="context-NETWORK_MASK"]').clear('2');
  cy.get('[data-cy="context-NETWORK_MASK"]').type('255.255.255.0');
  cy.get('.MuiGrid-container > :nth-child(3)').click();
  cy.get('[data-cy="context-GATEWAY"]').clear('1');
  cy.get('[data-cy="context-GATEWAY"]').type('192.168.1.1');
  cy.get('[data-cy="context-DNS"]').clear('8');
  cy.get('[data-cy="context-DNS"]').type('8.8.8.8');
  cy.get('[data-cy="context-METHOD"]').click();
  cy.contains('static (Based on context)').click();
  cy.get('.MuiPaper-root > .MuiButtonBase-root').click();
  cy.get('[data-cy^="text-name"]').click().type('BRIDGE_TYPE');
  cy.get('[data-cy^="text-value"]').click().type('linux');
  cy.get('[data-cy="stepper-next-button"]').click();
  /* ==== End Cypress Studio ==== */



  /* ==== Generated with Cypress Studio ==== */
  cy.get('.css-1fgrji7 > .MuiButtonBase-root > svg').click();
  cy.get('[data-cy="templates"] > .MuiTypography-root').click();
  cy.get('[style="min-height: 0px; height: auto; transition-duration: 281ms;"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiListItemText-root > [data-cy="main-menu-item-text"]').click();
  cy.get('[data-cy="action-create_dialog"]').click();
  cy.get('[data-cy="general-information-NAME"]').clear('U');
  cy.get('[data-cy="general-information-NAME"]').type('Ubuntu Server 24.04 Template');
  cy.get('[data-cy="general-capacity-MEMORY"]').clear('2');
  cy.get('[data-cy="general-capacity-MEMORY"]').type('2');
  cy.get('[data-cy="general-capacity-MEMORYUNIT"]').click();
  cy.contains('GB').click();
  cy.get('[data-cy="general-capacity-CPU"]').clear('2');
  cy.get('[data-cy="general-capacity-CPU"]').type('2');
  cy.get('[data-cy="general-capacity-VCPU"]').clear('2');
  cy.get('[data-cy="general-capacity-VCPU"]').type('2');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="add-disk"] > .MuiButton-endIcon > svg').click();
  cy.get('[data-cy="attach-image"] > .MuiTypography-root').click();
  cy.get('[data-cy="name"]').click();
  cy.get('.MuiDialogContent-root > .css-b1629l > .css-gro1cc > [data-cy="stepper-next-button"]').click();
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.get('.MuiDialogContent-root > .css-b1629l > .css-gro1cc > [data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="tab-network"] > .MuiTab-iconWrapper').click();
  cy.get('[data-cy="add-nic"]').click();
  cy.get('[data-cy="step-network"] > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label').click();
  cy.get('[data-cy="network-0"]').click();
  cy.get('.MuiDialogContent-root > .css-b1629l > .css-gro1cc > [data-cy="stepper-next-button"]').click();
  cy.get('.MuiDialogContent-root > .css-b1629l > .css-gro1cc > [data-cy="stepper-next-button"]').click();
  cy.get('.MuiDialogContent-root > .css-b1629l > .css-gro1cc > [data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="tab-booting"]').click();
  cy.get('[data-cy="disk0"] > .PrivateSwitchBase-input').check();
  cy.get('[data-cy="nic0"] > .PrivateSwitchBase-input').check();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('.css-1yxgodj').click();
  cy.get('[data-cy="action-instantiate_dialog"] > svg').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  /* ==== End Cypress Studio ==== */
});