Feature: This feature ensures that the airtime/data functioanlity on the Quickteller app works appropriately

As a user i want to be able to buy airtime and data on the quickteller app successfully
    Scenario: Verify that a user can buy airtime and data
    Given A user is on the Quickteller landing page
    When the user types in their correct username and password
    And the user navigates to the airtime recharge section and follows the prompt
    # Then the user should see a success message
    # And the airtime balance should be updated accordingly