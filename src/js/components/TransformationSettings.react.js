/**
 * Copyright 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const React = require('react');

import { Accordion, Icon } from 'semantic-ui-react';
import SettingsActions from '../data/SettingsActions';

import type { Props as BaseProps } from '../containers/AppContainer.react';

type Props = BaseProps & {
  accordionActive: boolean,
  accordionIndex: number,
  onAccordionTitleClick: (e: Event, itemProps: AccordionItemProps) => void
};

type AccordionItemProps = {
  index: number
};

class TransformationSettings extends React.Component<Props> {
  handleAdsRawHtmlChanged = (event: SyntheticEvent<HTMLInputElement>) => {
    SettingsActions.editAdsRawHtml(event.currentTarget.value);
  };

  handleAnalyticsRawHtmlChanged = (event: SyntheticEvent<HTMLInputElement>) => {
    SettingsActions.editAnalyticsRawHtml(event.currentTarget.value);
  };

  handleAudienceNetworkPlacementIdChanged = (
    event: SyntheticEvent<HTMLInputElement>
  ) => {
    SettingsActions.editAudienceNetworkPlacementId(event.currentTarget.value);
  };

  handleFbPixelIdChanged = (event: SyntheticEvent<HTMLInputElement>) => {
    SettingsActions.editFbPixelId(event.currentTarget.value);
  };

  handleStyleNameChanged = (event: SyntheticEvent<HTMLInputElement>) => {
    SettingsActions.editStyleName(event.currentTarget.value);
  };

  render() {
    return (
      <div>
        <Accordion.Title
          index={this.props.accordionIndex}
          active={this.props.accordionActive}
          onClick={this.props.onAccordionTitleClick}
        >
          <label>
            <Icon name="dropdown" />Settings
          </label>
        </Accordion.Title>
        <Accordion.Content active={this.props.accordionActive}>
          <div className="settings">
            <div className="settings-fields">
              <div className="general-settings field-line">
                <label>
                  <Icon name="edit" />General
                </label>
                <label className="sub-label" htmlFor="styleName">
                  <span>{this.props.settings.styleName ? '✔' : '•'}</span>&nbsp;
                  Style Name
                </label>
                <div className="field">
                  <input
                    type="text"
                    name="styleName"
                    placeholder="default"
                    onChange={this.handleStyleNameChanged}
                  />
                </div>
              </div>
              <div className="analytics-settings field-line">
                <label>
                  <Icon name="bar chart" />Analytics
                </label>
                <label className="sub-label" htmlFor="pixelId">
                  <span>
                    {this.props.settings.analyticsSettings.fbPixelId
                      ? '✔'
                      : '•'}
                  </span>&nbsp; Pixel ID
                </label>
                <div className="field">
                  <input
                    type="text"
                    name="pixelId"
                    placeholder="123456"
                    onChange={this.handleFbPixelIdChanged}
                  />
                </div>
                <label className="sub-label" htmlFor="analyticsRawHtml">
                  <span>
                    {this.props.settings.analyticsSettings.rawHtml ? '✔' : '•'}
                  </span>&nbsp; Raw HTML
                </label>
                <div className="field">
                  <textarea
                    name="analyticsRawHtml"
                    placeholder="<script>...</script>"
                    onChange={this.handleAnalyticsRawHtmlChanged}
                    rows="4"
                  />
                </div>
              </div>
              <div className="ads-settigns field-line">
                <label>
                  <Icon name="money" />Ads
                </label>
                <label className="sub-label" htmlFor="audienceNetworkId">
                  <span>
                    {this.props.settings.adsSettings.audienceNetworkPlacementId
                      ? '✔'
                      : '•'}
                  </span>&nbsp; Audience Network ID
                </label>
                <div className="field">
                  <input
                    type="text"
                    name="audienceNetworkId"
                    placeholder="123456"
                    onChange={this.handleAudienceNetworkPlacementIdChanged}
                  />
                </div>
                <label className="sub-label" htmlFor="adsRawHtml">
                  <span>
                    {this.props.settings.adsSettings.rawHtml ? '✔' : '•'}
                  </span>&nbsp; Raw HTML
                </label>
                <div className="field">
                  <textarea
                    name="adsRawHtml"
                    placeholder="<script>...</script>"
                    onChange={this.handleAdsRawHtmlChanged}
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </Accordion.Content>
      </div>
    );
  }
}

module.exports = TransformationSettings;
