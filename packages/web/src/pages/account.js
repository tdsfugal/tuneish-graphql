import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ColumnView,
  ItemView,
  // FormFrameView,
  // InputItemView,
  // InputLabelView,
  ButtonView,
} from "../components/_styles"

const AccountPage = props => {
  return (
    <Layout title="Manage Your Account" restricted="true">
      <SEO title="Account" />
      <ColumnView>
        <ItemView>
          <Link to="/account/change-password">
            <ButtonView>Change Password</ButtonView>
          </Link>
        </ItemView>
        <ItemView>
          <Link to="/account/request-password-reset">
            <ButtonView>Reset Password</ButtonView>
          </Link>
        </ItemView>
        <ItemView>
          <Link to="/account/delete-account">
            <ButtonView>Delete Account</ButtonView>
          </Link>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default AccountPage
