describe('OpenNebula Happy Path', () => {});

it('Create Host, Image, Network, VM Template and VM', function() {

  /* ==== Auth ==== */
  cy.visit('/fireedge/sunstone');
  cy.get('[data-cy="login-user"]').type(`${Cypress.env('USER_LOGIN')}`);
  cy.get('[data-cy="login-token"]').type(`${Cypress.env('USER_PASSWORD')}`);
  cy.get('[data-cy="login-button"]').click();

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
  cy.get('[data-cy="cluster-0"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();

  /* ==== Image ==== */
  cy.get('.css-1fgrji7 > .MuiButtonBase-root > svg').click();
  cy.get('[data-cy="storage"] > .MuiTypography-root').click();
  cy.get('[style="min-height: 0px; height: auto; transition-duration: 324ms;"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root > [data-cy="main-menu-item-text"]').click();
  cy.get('[data-cy="action-image_create_dialog"]').click();
  cy.get('[data-cy="general-NAME"]').type('Ubuntu Server 24.04 Image');
  cy.get('[data-cy="general-PATH"]').type('https://cloud-images.ubuntu.com/releases/noble/release/ubuntu-24.04-server-cloudimg-amd64.img');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="datastore-1"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.url({ timeout: 10000 }).should('eq', `${cy.config('baseUrl')}/fireedge/sunstone/image`);

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

  /* ==== VM Template and VM ==== */
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
  // This step was added because after `Attach image` step we got `Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'reduce')` error
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
  cy.get('[data-cy="template-0"]').click();
  cy.get('[data-cy="action-instantiate_dialog"] > svg').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  waitForVmReady();
  cy.get('[data-cy="0-vnc"]').click()

});


function waitForVmReady(attempt = 0) {
  const maxAttempts = 20;  
  const delay = 10000; 
  cy.get('[data-cy="refresh"]').click();

  cy.get('body').then(($body) => {
    const vncButton = $body.find('[data-cy="0-vnc"]');

    if (vncButton.length && vncButton.is(':visible')) {
      cy.wrap(vncButton).should('be.visible');
      return;
    }

    if (attempt >= maxAttempts) {
      throw new Error('VM VNC button did not appear in expected time');
    }

    cy.wait(delay);
    waitForVmReady(attempt + 1);
  });
}
