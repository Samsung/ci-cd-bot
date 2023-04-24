/*
 * Copyright (c) 2022 Ayush Patel <patel.ayush08@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

const commands = require('probot-commands')

module.exports = (app) => {
  // Your code here
  app.log.info('Yay, the app was loaded!');

  app.on('issues.opened', async (context) => {
    const issueComment = context.issue({
      body: 'Hi, this is CuwoN LiBy :cowboy_hat_face:\n' +
            'Thanks for opening this issue!\n\n' +
            'Currently I\'m still under development\n' +
            'To contribute, please contact Ayush Patel !!!',
    });
    return context.octokit.issues.createComment(issueComment);
  });

  commands(app, 'help', (context, command) => {
    if (command.arguments == null) {
      const helpComment = context.issue({
        body: 'Hi, this is CuwoN LiBy\'s help section !\n\n' +
              '\n' +
              'Usage:\n' +
              '```\n' +
              'help            Show help section\n' +
              'help COMMAND    Show help for COMMAND\n' +
              '```\n' +
              '\n' +
              'Currently I\'m still under development\n' +
              'To contribute, please contact Ayush Patel !!!',
      });
      return context.octokit.issues.createComment(helpComment);
    } else {
      const args = command.arguments.split(' ');
      const helpComment = context.issue({
        body: 'Hi, this is CuwoN LiBy\'s help section !\n\n' +
              '\n' +
              'Command `' + args[0] + '` not found.\n' +
              '\n' +
              'Usage:\n' +
              '```\n' +
              'help            Show help section\n' +
              'help COMMAND    Show help for COMMAND\n' +
              '```\n' +
              '\n' +
              'Currently I\'m still under development\n' +
              'To contribute, please contact Ayush Patel !!!',
      });
      return context.octokit.issues.createComment(helpComment);
    }
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
