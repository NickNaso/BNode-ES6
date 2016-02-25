/**
 * Packly licenses this file
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
 * Document: Person
 * Created on 25/02/2016
 * Contributors - initial API implementation:
 * Nicola Del Gobbo
 */
'use strict';

export default class Person {

    constructor(firstName = "John", lastName = "Doe") {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    toString() {
        return `You are ${this._firstName} ${this._lastName}`;
    }

}
