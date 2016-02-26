/**
 * NickNaso licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 * Document: myapp
 * Created on 25/02/2016
 * Contributors - initial API implementation:
 * Nicola Del Gobbo
 */

/**
 * Module dependencies
 */
'use strict';

import Person from './Person';

let packlyTeam = new Set();

packlyTeam.add(new Person("Brendan", "Eich"));
packlyTeam.add(new Person("Ada", "Lovelace"));
packlyTeam.add(new Person("Dennis", "Ritchie"));
packlyTeam.add(new Person("James", "Gosling"));

for (let person of packlyTeam) {
    console.log(person.toString());
}

