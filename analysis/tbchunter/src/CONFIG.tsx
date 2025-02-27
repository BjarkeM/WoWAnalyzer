import { t } from '@lingui/macro';
import { Zerotorescue } from 'CONTRIBUTORS';
import Expansion from 'game/Expansion';
import PRIMARY_STATS from 'game/PRIMARY_STATS';
import ROLES from 'game/ROLES';
import { Icon } from 'interface';
import Config, { TextType } from 'parser/Config';
import React from 'react';

import CHANGELOG from './CHANGELOG';
import * as SPELLS from './SPELLS';

export enum Build {
  DEFAULT = 'default',
}

const config: Config = {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list. If someone goes MIA, they may be removed after major changes or during a new expansion.
  contributors: [Zerotorescue],
  expansion: Expansion.TheBurningCrusade,
  // The WoW client patch this spec was last updated.
  patchCompatibility: '2.5.1',
  isPartial: true,
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: <>Proof of Concept analysis for TBCC BM Hunters.</>,
  pages: {
    overview: {
      hideChecklist: true,
      text: (
        <>
          Classic support is still a Work in Progress. You may be able to use the timeline to see
          your Auto Shot clipping, and there are a few usable suggestions, but please consult your
          class Discord for a complete log review.
        </>
      ),
      type: TextType.Info,
    },
  },
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport: '/report/Dd4mA7LtyGqhCanN/10-Heroic+Hungering+Destroyer+-+Kill+(4:04)/Sucker',
  builds: {
    [Build.DEFAULT]: {
      url: 'standard',
      name: '41/20/0',
      icon: <Icon icon="ability_hunter_mendpet" />,
      visible: true,
    },
  },
  timeline: {
    separateCastBars: [[SPELLS.AUTO_SHOT]],
  },

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: {
    id: 0,
    type: 'Hunter',
    index: 35,
    className: t({
      id: 'className.hunter',
      message: `Hunter`,
    }),
    role: ROLES.DPS.RANGED,
    primaryStat: PRIMARY_STATS.AGILITY,
    ranking: {
      class: 3,
      spec: 1,
    },
  },
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () =>
    import('./CombatLogParser' /* webpackChunkName: "TBCHunter" */).then(
      (exports) => exports.default,
    ),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: __dirname,
};

export default config;
