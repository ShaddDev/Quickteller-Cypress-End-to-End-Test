Feature: This feature ensures that the login functioanlity on the Quickteller app works appropriately

As a user i want to visit the login page successfully so that i can perform some course management functions

    Scenario: Verify that a user can login to the app
    Given A user is on the Quickteller landing page
    When the user types in their correct username and password
    Then the user should be logged in to the app

    # Scenario: User logs in with invalid credentials
    # Given A user is on the Quickteller landing page
    # When the user types in an incorrect username and/or password
    # Then the user should see an error message