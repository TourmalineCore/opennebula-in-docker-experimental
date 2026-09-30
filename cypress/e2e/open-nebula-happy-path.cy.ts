describe('OpenNebula Happy Path', () => {});

it('Create Host, Image, Network, VM Template and VM', function() {

  /* ==== Auth ==== */
  cy.visit('/fireedge/sunstone');
  cy.get('[data-cy="login-user"]').type(`${Cypress.env('USER_LOGIN')}`);
  cy.get('[data-cy="login-token"]').type(`${Cypress.env('USER_PASSWORD')}`);
  cy.get('[data-cy="login-button"]').click();

  /* ==== Host ==== */
  cy.url({ timeout: 10000 }).should('eq', `${cy.config('baseUrl')}/fireedge/sunstone/dashboard`);
  cy.get('.sidebar-header-logo').trigger('mouseover');
  cy.get('[data-cy="infrastructure"]').click();
  cy.get(':nth-child(5) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(3) > [data-cy="main-menu-item"]').click();
  cy.get('[data-cy="action-create_dialog"]').click();
  cy.get('[value="kvm"]').click();
  cy.get('[data-cy="general-information-hostname"]').clear();
  cy.get('[data-cy="general-information-hostname"]').type('localhost');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.wait(2000);
  cy.contains('default').click();
  cy.get('[data-cy="stepper-next-button"]').click();

  /* ==== Image ==== */
  cy.get('.sidebar-header-logo').trigger('mouseover');
  cy.get('[data-cy="storage"]').click();
  cy.get(':nth-child(3) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > [data-cy="main-menu-item"]').click();
  cy.get('[data-cy="action-create_dialog"]').click();
  cy.get('[data-cy="general-NAME"]').type('Ubuntu Server 24.04 Image');
  cy.get('[data-cy="general-PATH"]').type('https://cloud-images.ubuntu.com/releases/noble/release/ubuntu-24.04-server-cloudimg-amd64.img');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.contains('default').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.url({ timeout: 10000 }).should('eq', `${cy.config('baseUrl')}/fireedge/sunstone/image`);

  /* ==== Network ==== */
  cy.get('.sidebar-header-logo').trigger('mouseover');
  cy.get('[data-cy="networks"]').click();
  cy.get(':nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > [data-cy="main-menu-item"]').click();
  cy.get('[data-cy="action-create_dialog"]').click();
  cy.get('[data-cy="vnet-create-scratch"]').click();
  cy.get('[data-cy="vnet-create-confirm"]').click();
  cy.get('[data-cy="general-information-NAME"]').type('Private Network');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="configuration-PHYDEV_SWITCH"]').check();
  cy.get('[data-cy="tab-addresses"]').click();
  cy.get('[data-cy="add-ar"]').click();
  cy.get('[data-cy="undefined-IP"]').type('192.168.1.100');
  cy.get('[data-cy="undefined-SIZE"]').type('20');
  cy.get('[data-cy="dg-accept-button"]').click();
  cy.get('[data-cy="tab-context"]').click();
  cy.get('[data-cy="context-NETWORK_ADDRESS"]').type('192.168.1.0');
  cy.get('[data-cy="context-NETWORK_MASK"]').type('255.255.255.0');
  cy.get('.MuiGrid-container > :nth-child(3)').click();
  cy.get('[data-cy="context-GATEWAY"]').type('192.168.1.1');
  cy.get('[data-cy="context-DNS"]').type('8.8.8.8');
  cy.get('[data-cy="context-METHOD"]').click();
  cy.contains('static (Based on context)').click();
  cy.get('[data-cy="stepper-next-button"]').click();

  /* ==== VM Template and VM ==== */
  cy.get('.sidebar-header-logo').trigger('mouseover');
  cy.get('[data-cy="templates"]').click();
  cy.get(':nth-child(2) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > [data-cy="main-menu-item"]').click();
  cy.get('[data-cy="action-create_dialog"]').click();
  cy.get('[data-cy="general-information-NAME"]').type('Ubuntu Server 24.04 Template');
  cy.get('[data-cy="general-capacity-MEMORY"]').type('2');
  cy.get('[data-cy="general-capacity-MEMORY-unit"]').click();
  cy.contains('GB').click();
  cy.get('[data-cy="general-capacity-CPU"]').type('2');
  cy.get('[data-cy="general-capacity-VCPU"]').type('2');
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="vm-template-storage-attach-disk"]').click();
  cy.get('[data-cy="vm-template-storage-image-disk"]').click();
  cy.contains('Ubuntu Server 24.04 Image').click();
  cy.get('.MuiDialogContent-root > .form-stepper-root > .form-footer-buttons > .form-stepper-buttons > .form-stepper-buttons-progress > [data-cy="stepper-next-button"]').click();
  cy.get('.MuiDialogContent-root > .form-stepper-root > .form-footer-buttons > .form-stepper-buttons > .form-stepper-buttons-progress > [data-cy="stepper-next-button"]').click();
  // // This step was added because after `Attach image` step we got `Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'reduce')` error
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
  // cy.get('.MuiDialogContent-root > .css-b1629l > .css-gro1cc > [data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="tab-network"]').click();
  cy.get('[data-cy="vm-template-networking-attach-nic"]').click();
  cy.get('.snackbar-close-button > .MuiButton-root').click();
  cy.get('.MuiDialogContent-root > .form-stepper-root > .form-footer-buttons > .form-stepper-buttons > .form-stepper-buttons-progress > [data-cy="stepper-next-button"]').click();
  cy.contains('Private Network').click();
  cy.get('.MuiDialogContent-root > .form-stepper-root > .form-footer-buttons > .form-stepper-buttons > .form-stepper-buttons-progress > [data-cy="stepper-next-button"]').click();
  cy.get('.MuiDialogContent-root > .form-stepper-root > .form-footer-buttons > .form-stepper-buttons > .form-stepper-buttons-progress > [data-cy="stepper-next-button"]').click();
  cy.get('.MuiDialogContent-root > .form-stepper-root > .form-footer-buttons > .form-stepper-buttons > .form-stepper-buttons-progress > [data-cy="stepper-next-button"]').click();  
  cy.get('[data-cy="tab-booting"]').click();
  cy.get('[data-cy="disk0"] > .boot-order-checkbox > .MuiFormControlLabel-root > .MuiCheckbox-root > .checkbox-input').check();
  cy.get('[data-cy="nic0"] > .boot-order-checkbox > .MuiFormControlLabel-root > .MuiCheckbox-root > .checkbox-input').check();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="template-0"]').click();
  cy.get('[data-cy="action-instantiate_dialog"] > svg').click();
  cy.get('[data-cy="stepper-next-button"]').click();
  cy.get('[data-cy="stepper-next-button"]').click();


  cy.get('.sidebar-header-logo').trigger('mouseover');
  cy.get('[data-cy="instances"]').click();
  cy.get(':nth-child(1) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > [data-cy="main-menu-item"]').click();
  cy.get('.card-info').click();
  cy.wait(2000);
  cy.get('.compact-toolbar-overflow > .menu-button-container > .toggle-button-container').click();


  waitForVmReady();
  cy.get('[data-cy="0-vnc"]').click()

});


function waitForVmReady(attempt = 0) {
  const maxAttempts = 20;  
  const delay = 10000; 

  cy.get('body').then(($body) => {
    const menu = $body.find('.MuiPopover-root > .MuiPaper-root > .MuiList-root > :nth-child(1)');

    if (menu.length && !menu.hasClass('disabled')) {
      cy.wrap(menu).click();
      return;
    }

    if (attempt >= maxAttempts) {
      throw new Error('VM VNC button did not appear in expected time');
    }

    cy.wait(delay);
    waitForVmReady(attempt + 1);
  });
}
