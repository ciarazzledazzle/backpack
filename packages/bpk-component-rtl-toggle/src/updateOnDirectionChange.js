/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react';
import { getHtmlElement, DIRECTION_CHANGE_EVENT } from './utils';

const updateOnDirectionChange = (EnhancedComponent) => {
  class UpdateOnDirectionChange extends Component {
    constructor() {
      super();
      this.onDirectionChange = this.onDirectionChange.bind(this);
    }

    componentDidMount() {
      getHtmlElement().addEventListener(DIRECTION_CHANGE_EVENT, this.onDirectionChange, false);
    }

    componentWillUnmount() {
      getHtmlElement().removeEventListener(DIRECTION_CHANGE_EVENT, this.onDirectionChange, false);
    }

    onDirectionChange() {
      this.forceUpdate();
    }

    render() {
      return <EnhancedComponent {...this.props} />;
    }
  }

  const enhancedComponentName = EnhancedComponent.displayName || EnhancedComponent.name || 'Component';

  UpdateOnDirectionChange.displayName = `updateOnDirectionChange(${enhancedComponentName})`;

  return UpdateOnDirectionChange;
};

export default updateOnDirectionChange;
