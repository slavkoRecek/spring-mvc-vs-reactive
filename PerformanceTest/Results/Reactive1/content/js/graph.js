/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 1226.0, "series": [{"data": [[0.0, 15.0], [0.1, 26.0], [0.2, 35.0], [0.3, 38.0], [0.4, 39.0], [0.5, 40.0], [0.6, 41.0], [0.7, 42.0], [0.8, 42.0], [0.9, 42.0], [1.0, 43.0], [1.1, 43.0], [1.2, 44.0], [1.3, 44.0], [1.4, 44.0], [1.5, 45.0], [1.6, 45.0], [1.7, 45.0], [1.8, 46.0], [1.9, 46.0], [2.0, 46.0], [2.1, 46.0], [2.2, 47.0], [2.3, 47.0], [2.4, 47.0], [2.5, 47.0], [2.6, 48.0], [2.7, 48.0], [2.8, 48.0], [2.9, 48.0], [3.0, 49.0], [3.1, 49.0], [3.2, 49.0], [3.3, 49.0], [3.4, 50.0], [3.5, 50.0], [3.6, 50.0], [3.7, 50.0], [3.8, 51.0], [3.9, 51.0], [4.0, 51.0], [4.1, 51.0], [4.2, 52.0], [4.3, 52.0], [4.4, 52.0], [4.5, 53.0], [4.6, 53.0], [4.7, 53.0], [4.8, 53.0], [4.9, 54.0], [5.0, 54.0], [5.1, 54.0], [5.2, 55.0], [5.3, 55.0], [5.4, 56.0], [5.5, 56.0], [5.6, 56.0], [5.7, 57.0], [5.8, 57.0], [5.9, 57.0], [6.0, 58.0], [6.1, 58.0], [6.2, 58.0], [6.3, 59.0], [6.4, 59.0], [6.5, 59.0], [6.6, 59.0], [6.7, 60.0], [6.8, 60.0], [6.9, 60.0], [7.0, 60.0], [7.1, 60.0], [7.2, 61.0], [7.3, 61.0], [7.4, 61.0], [7.5, 61.0], [7.6, 61.0], [7.7, 61.0], [7.8, 61.0], [7.9, 62.0], [8.0, 62.0], [8.1, 62.0], [8.2, 62.0], [8.3, 62.0], [8.4, 62.0], [8.5, 62.0], [8.6, 62.0], [8.7, 62.0], [8.8, 63.0], [8.9, 63.0], [9.0, 63.0], [9.1, 63.0], [9.2, 63.0], [9.3, 63.0], [9.4, 63.0], [9.5, 63.0], [9.6, 63.0], [9.7, 63.0], [9.8, 63.0], [9.9, 63.0], [10.0, 64.0], [10.1, 64.0], [10.2, 64.0], [10.3, 64.0], [10.4, 64.0], [10.5, 64.0], [10.6, 64.0], [10.7, 64.0], [10.8, 64.0], [10.9, 64.0], [11.0, 64.0], [11.1, 64.0], [11.2, 64.0], [11.3, 64.0], [11.4, 65.0], [11.5, 65.0], [11.6, 65.0], [11.7, 65.0], [11.8, 65.0], [11.9, 65.0], [12.0, 65.0], [12.1, 65.0], [12.2, 65.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 65.0], [12.7, 65.0], [12.8, 65.0], [12.9, 65.0], [13.0, 65.0], [13.1, 65.0], [13.2, 65.0], [13.3, 66.0], [13.4, 66.0], [13.5, 66.0], [13.6, 66.0], [13.7, 66.0], [13.8, 66.0], [13.9, 66.0], [14.0, 66.0], [14.1, 66.0], [14.2, 66.0], [14.3, 66.0], [14.4, 66.0], [14.5, 66.0], [14.6, 66.0], [14.7, 66.0], [14.8, 66.0], [14.9, 66.0], [15.0, 66.0], [15.1, 66.0], [15.2, 66.0], [15.3, 66.0], [15.4, 66.0], [15.5, 67.0], [15.6, 67.0], [15.7, 67.0], [15.8, 67.0], [15.9, 67.0], [16.0, 67.0], [16.1, 67.0], [16.2, 67.0], [16.3, 67.0], [16.4, 67.0], [16.5, 67.0], [16.6, 67.0], [16.7, 67.0], [16.8, 67.0], [16.9, 67.0], [17.0, 67.0], [17.1, 67.0], [17.2, 67.0], [17.3, 67.0], [17.4, 67.0], [17.5, 67.0], [17.6, 67.0], [17.7, 67.0], [17.8, 67.0], [17.9, 67.0], [18.0, 67.0], [18.1, 67.0], [18.2, 68.0], [18.3, 68.0], [18.4, 68.0], [18.5, 68.0], [18.6, 68.0], [18.7, 68.0], [18.8, 68.0], [18.9, 68.0], [19.0, 68.0], [19.1, 68.0], [19.2, 68.0], [19.3, 68.0], [19.4, 68.0], [19.5, 68.0], [19.6, 68.0], [19.7, 68.0], [19.8, 68.0], [19.9, 68.0], [20.0, 68.0], [20.1, 68.0], [20.2, 68.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 68.0], [20.7, 68.0], [20.8, 68.0], [20.9, 68.0], [21.0, 68.0], [21.1, 69.0], [21.2, 69.0], [21.3, 69.0], [21.4, 69.0], [21.5, 69.0], [21.6, 69.0], [21.7, 69.0], [21.8, 69.0], [21.9, 69.0], [22.0, 69.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 69.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 69.0], [22.9, 69.0], [23.0, 69.0], [23.1, 69.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 69.0], [24.3, 69.0], [24.4, 70.0], [24.5, 70.0], [24.6, 70.0], [24.7, 70.0], [24.8, 70.0], [24.9, 70.0], [25.0, 70.0], [25.1, 70.0], [25.2, 70.0], [25.3, 70.0], [25.4, 70.0], [25.5, 70.0], [25.6, 70.0], [25.7, 70.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 70.0], [26.5, 70.0], [26.6, 70.0], [26.7, 70.0], [26.8, 70.0], [26.9, 70.0], [27.0, 70.0], [27.1, 70.0], [27.2, 70.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 71.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 71.0], [28.9, 71.0], [29.0, 71.0], [29.1, 71.0], [29.2, 71.0], [29.3, 71.0], [29.4, 71.0], [29.5, 71.0], [29.6, 71.0], [29.7, 71.0], [29.8, 71.0], [29.9, 71.0], [30.0, 71.0], [30.1, 71.0], [30.2, 71.0], [30.3, 71.0], [30.4, 71.0], [30.5, 71.0], [30.6, 71.0], [30.7, 71.0], [30.8, 71.0], [30.9, 71.0], [31.0, 71.0], [31.1, 71.0], [31.2, 71.0], [31.3, 71.0], [31.4, 72.0], [31.5, 72.0], [31.6, 72.0], [31.7, 72.0], [31.8, 72.0], [31.9, 72.0], [32.0, 72.0], [32.1, 72.0], [32.2, 72.0], [32.3, 72.0], [32.4, 72.0], [32.5, 72.0], [32.6, 72.0], [32.7, 72.0], [32.8, 72.0], [32.9, 72.0], [33.0, 72.0], [33.1, 72.0], [33.2, 72.0], [33.3, 72.0], [33.4, 72.0], [33.5, 72.0], [33.6, 72.0], [33.7, 72.0], [33.8, 72.0], [33.9, 72.0], [34.0, 72.0], [34.1, 72.0], [34.2, 72.0], [34.3, 72.0], [34.4, 72.0], [34.5, 72.0], [34.6, 72.0], [34.7, 72.0], [34.8, 72.0], [34.9, 72.0], [35.0, 73.0], [35.1, 73.0], [35.2, 73.0], [35.3, 73.0], [35.4, 73.0], [35.5, 73.0], [35.6, 73.0], [35.7, 73.0], [35.8, 73.0], [35.9, 73.0], [36.0, 73.0], [36.1, 73.0], [36.2, 73.0], [36.3, 73.0], [36.4, 73.0], [36.5, 73.0], [36.6, 73.0], [36.7, 73.0], [36.8, 73.0], [36.9, 73.0], [37.0, 73.0], [37.1, 73.0], [37.2, 73.0], [37.3, 73.0], [37.4, 73.0], [37.5, 73.0], [37.6, 73.0], [37.7, 73.0], [37.8, 73.0], [37.9, 73.0], [38.0, 73.0], [38.1, 73.0], [38.2, 73.0], [38.3, 73.0], [38.4, 74.0], [38.5, 74.0], [38.6, 74.0], [38.7, 74.0], [38.8, 74.0], [38.9, 74.0], [39.0, 74.0], [39.1, 74.0], [39.2, 74.0], [39.3, 74.0], [39.4, 74.0], [39.5, 74.0], [39.6, 74.0], [39.7, 74.0], [39.8, 74.0], [39.9, 74.0], [40.0, 74.0], [40.1, 74.0], [40.2, 74.0], [40.3, 74.0], [40.4, 74.0], [40.5, 74.0], [40.6, 74.0], [40.7, 74.0], [40.8, 74.0], [40.9, 74.0], [41.0, 74.0], [41.1, 74.0], [41.2, 74.0], [41.3, 74.0], [41.4, 74.0], [41.5, 75.0], [41.6, 75.0], [41.7, 75.0], [41.8, 75.0], [41.9, 75.0], [42.0, 75.0], [42.1, 75.0], [42.2, 75.0], [42.3, 75.0], [42.4, 75.0], [42.5, 75.0], [42.6, 75.0], [42.7, 75.0], [42.8, 75.0], [42.9, 75.0], [43.0, 75.0], [43.1, 75.0], [43.2, 75.0], [43.3, 75.0], [43.4, 75.0], [43.5, 75.0], [43.6, 75.0], [43.7, 75.0], [43.8, 75.0], [43.9, 75.0], [44.0, 75.0], [44.1, 75.0], [44.2, 75.0], [44.3, 76.0], [44.4, 76.0], [44.5, 76.0], [44.6, 76.0], [44.7, 76.0], [44.8, 76.0], [44.9, 76.0], [45.0, 76.0], [45.1, 76.0], [45.2, 76.0], [45.3, 76.0], [45.4, 76.0], [45.5, 76.0], [45.6, 76.0], [45.7, 76.0], [45.8, 76.0], [45.9, 76.0], [46.0, 76.0], [46.1, 76.0], [46.2, 76.0], [46.3, 76.0], [46.4, 76.0], [46.5, 76.0], [46.6, 76.0], [46.7, 76.0], [46.8, 77.0], [46.9, 77.0], [47.0, 77.0], [47.1, 77.0], [47.2, 77.0], [47.3, 77.0], [47.4, 77.0], [47.5, 77.0], [47.6, 77.0], [47.7, 77.0], [47.8, 77.0], [47.9, 77.0], [48.0, 77.0], [48.1, 77.0], [48.2, 77.0], [48.3, 77.0], [48.4, 77.0], [48.5, 77.0], [48.6, 77.0], [48.7, 77.0], [48.8, 77.0], [48.9, 77.0], [49.0, 78.0], [49.1, 78.0], [49.2, 78.0], [49.3, 78.0], [49.4, 78.0], [49.5, 78.0], [49.6, 78.0], [49.7, 78.0], [49.8, 78.0], [49.9, 78.0], [50.0, 78.0], [50.1, 78.0], [50.2, 78.0], [50.3, 78.0], [50.4, 78.0], [50.5, 78.0], [50.6, 78.0], [50.7, 78.0], [50.8, 78.0], [50.9, 78.0], [51.0, 79.0], [51.1, 79.0], [51.2, 79.0], [51.3, 79.0], [51.4, 79.0], [51.5, 79.0], [51.6, 79.0], [51.7, 79.0], [51.8, 79.0], [51.9, 79.0], [52.0, 79.0], [52.1, 79.0], [52.2, 79.0], [52.3, 79.0], [52.4, 79.0], [52.5, 79.0], [52.6, 79.0], [52.7, 80.0], [52.8, 80.0], [52.9, 80.0], [53.0, 80.0], [53.1, 80.0], [53.2, 80.0], [53.3, 80.0], [53.4, 80.0], [53.5, 80.0], [53.6, 80.0], [53.7, 80.0], [53.8, 80.0], [53.9, 80.0], [54.0, 80.0], [54.1, 80.0], [54.2, 81.0], [54.3, 81.0], [54.4, 81.0], [54.5, 81.0], [54.6, 81.0], [54.7, 81.0], [54.8, 81.0], [54.9, 81.0], [55.0, 81.0], [55.1, 81.0], [55.2, 81.0], [55.3, 81.0], [55.4, 81.0], [55.5, 81.0], [55.6, 82.0], [55.7, 82.0], [55.8, 82.0], [55.9, 82.0], [56.0, 82.0], [56.1, 82.0], [56.2, 82.0], [56.3, 82.0], [56.4, 82.0], [56.5, 82.0], [56.6, 82.0], [56.7, 82.0], [56.8, 83.0], [56.9, 83.0], [57.0, 83.0], [57.1, 83.0], [57.2, 83.0], [57.3, 83.0], [57.4, 83.0], [57.5, 83.0], [57.6, 83.0], [57.7, 83.0], [57.8, 83.0], [57.9, 83.0], [58.0, 84.0], [58.1, 84.0], [58.2, 84.0], [58.3, 84.0], [58.4, 84.0], [58.5, 84.0], [58.6, 84.0], [58.7, 84.0], [58.8, 84.0], [58.9, 84.0], [59.0, 84.0], [59.1, 84.0], [59.2, 85.0], [59.3, 85.0], [59.4, 85.0], [59.5, 85.0], [59.6, 85.0], [59.7, 85.0], [59.8, 85.0], [59.9, 85.0], [60.0, 85.0], [60.1, 85.0], [60.2, 85.0], [60.3, 85.0], [60.4, 86.0], [60.5, 86.0], [60.6, 86.0], [60.7, 86.0], [60.8, 86.0], [60.9, 86.0], [61.0, 86.0], [61.1, 86.0], [61.2, 86.0], [61.3, 86.0], [61.4, 86.0], [61.5, 86.0], [61.6, 87.0], [61.7, 87.0], [61.8, 87.0], [61.9, 87.0], [62.0, 87.0], [62.1, 87.0], [62.2, 87.0], [62.3, 87.0], [62.4, 87.0], [62.5, 87.0], [62.6, 87.0], [62.7, 87.0], [62.8, 87.0], [62.9, 88.0], [63.0, 88.0], [63.1, 88.0], [63.2, 88.0], [63.3, 88.0], [63.4, 88.0], [63.5, 88.0], [63.6, 88.0], [63.7, 88.0], [63.8, 88.0], [63.9, 88.0], [64.0, 88.0], [64.1, 88.0], [64.2, 89.0], [64.3, 89.0], [64.4, 89.0], [64.5, 89.0], [64.6, 89.0], [64.7, 89.0], [64.8, 89.0], [64.9, 89.0], [65.0, 89.0], [65.1, 89.0], [65.2, 89.0], [65.3, 89.0], [65.4, 89.0], [65.5, 90.0], [65.6, 90.0], [65.7, 90.0], [65.8, 90.0], [65.9, 90.0], [66.0, 90.0], [66.1, 90.0], [66.2, 90.0], [66.3, 90.0], [66.4, 90.0], [66.5, 90.0], [66.6, 90.0], [66.7, 90.0], [66.8, 90.0], [66.9, 91.0], [67.0, 91.0], [67.1, 91.0], [67.2, 91.0], [67.3, 91.0], [67.4, 91.0], [67.5, 91.0], [67.6, 91.0], [67.7, 91.0], [67.8, 91.0], [67.9, 91.0], [68.0, 91.0], [68.1, 91.0], [68.2, 91.0], [68.3, 91.0], [68.4, 92.0], [68.5, 92.0], [68.6, 92.0], [68.7, 92.0], [68.8, 92.0], [68.9, 92.0], [69.0, 92.0], [69.1, 92.0], [69.2, 92.0], [69.3, 92.0], [69.4, 92.0], [69.5, 92.0], [69.6, 92.0], [69.7, 93.0], [69.8, 93.0], [69.9, 93.0], [70.0, 93.0], [70.1, 93.0], [70.2, 93.0], [70.3, 93.0], [70.4, 93.0], [70.5, 93.0], [70.6, 93.0], [70.7, 93.0], [70.8, 93.0], [70.9, 93.0], [71.0, 93.0], [71.1, 94.0], [71.2, 94.0], [71.3, 94.0], [71.4, 94.0], [71.5, 94.0], [71.6, 94.0], [71.7, 94.0], [71.8, 94.0], [71.9, 94.0], [72.0, 94.0], [72.1, 94.0], [72.2, 94.0], [72.3, 94.0], [72.4, 95.0], [72.5, 95.0], [72.6, 95.0], [72.7, 95.0], [72.8, 95.0], [72.9, 95.0], [73.0, 95.0], [73.1, 95.0], [73.2, 95.0], [73.3, 95.0], [73.4, 95.0], [73.5, 95.0], [73.6, 95.0], [73.7, 96.0], [73.8, 96.0], [73.9, 96.0], [74.0, 96.0], [74.1, 96.0], [74.2, 96.0], [74.3, 96.0], [74.4, 96.0], [74.5, 96.0], [74.6, 96.0], [74.7, 96.0], [74.8, 96.0], [74.9, 97.0], [75.0, 97.0], [75.1, 97.0], [75.2, 97.0], [75.3, 97.0], [75.4, 97.0], [75.5, 97.0], [75.6, 97.0], [75.7, 97.0], [75.8, 97.0], [75.9, 97.0], [76.0, 98.0], [76.1, 98.0], [76.2, 98.0], [76.3, 98.0], [76.4, 98.0], [76.5, 98.0], [76.6, 98.0], [76.7, 98.0], [76.8, 98.0], [76.9, 98.0], [77.0, 98.0], [77.1, 99.0], [77.2, 99.0], [77.3, 99.0], [77.4, 99.0], [77.5, 99.0], [77.6, 99.0], [77.7, 99.0], [77.8, 99.0], [77.9, 99.0], [78.0, 99.0], [78.1, 100.0], [78.2, 100.0], [78.3, 100.0], [78.4, 100.0], [78.5, 100.0], [78.6, 100.0], [78.7, 100.0], [78.8, 100.0], [78.9, 100.0], [79.0, 101.0], [79.1, 101.0], [79.2, 101.0], [79.3, 101.0], [79.4, 101.0], [79.5, 101.0], [79.6, 101.0], [79.7, 101.0], [79.8, 102.0], [79.9, 102.0], [80.0, 102.0], [80.1, 102.0], [80.2, 102.0], [80.3, 102.0], [80.4, 102.0], [80.5, 102.0], [80.6, 103.0], [80.7, 103.0], [80.8, 103.0], [80.9, 103.0], [81.0, 103.0], [81.1, 103.0], [81.2, 103.0], [81.3, 103.0], [81.4, 104.0], [81.5, 104.0], [81.6, 104.0], [81.7, 104.0], [81.8, 104.0], [81.9, 104.0], [82.0, 105.0], [82.1, 105.0], [82.2, 105.0], [82.3, 105.0], [82.4, 105.0], [82.5, 105.0], [82.6, 105.0], [82.7, 106.0], [82.8, 106.0], [82.9, 106.0], [83.0, 106.0], [83.1, 106.0], [83.2, 106.0], [83.3, 107.0], [83.4, 107.0], [83.5, 107.0], [83.6, 107.0], [83.7, 107.0], [83.8, 108.0], [83.9, 108.0], [84.0, 108.0], [84.1, 108.0], [84.2, 108.0], [84.3, 108.0], [84.4, 109.0], [84.5, 109.0], [84.6, 109.0], [84.7, 109.0], [84.8, 109.0], [84.9, 110.0], [85.0, 110.0], [85.1, 110.0], [85.2, 110.0], [85.3, 110.0], [85.4, 110.0], [85.5, 111.0], [85.6, 111.0], [85.7, 111.0], [85.8, 111.0], [85.9, 111.0], [86.0, 112.0], [86.1, 112.0], [86.2, 112.0], [86.3, 112.0], [86.4, 112.0], [86.5, 113.0], [86.6, 113.0], [86.7, 113.0], [86.8, 113.0], [86.9, 113.0], [87.0, 114.0], [87.1, 114.0], [87.2, 114.0], [87.3, 114.0], [87.4, 115.0], [87.5, 115.0], [87.6, 115.0], [87.7, 115.0], [87.8, 115.0], [87.9, 116.0], [88.0, 116.0], [88.1, 116.0], [88.2, 116.0], [88.3, 116.0], [88.4, 117.0], [88.5, 117.0], [88.6, 117.0], [88.7, 117.0], [88.8, 118.0], [88.9, 118.0], [89.0, 118.0], [89.1, 118.0], [89.2, 118.0], [89.3, 119.0], [89.4, 119.0], [89.5, 119.0], [89.6, 119.0], [89.7, 120.0], [89.8, 120.0], [89.9, 120.0], [90.0, 121.0], [90.1, 121.0], [90.2, 121.0], [90.3, 121.0], [90.4, 122.0], [90.5, 122.0], [90.6, 122.0], [90.7, 123.0], [90.8, 123.0], [90.9, 123.0], [91.0, 123.0], [91.1, 124.0], [91.2, 124.0], [91.3, 124.0], [91.4, 125.0], [91.5, 125.0], [91.6, 125.0], [91.7, 125.0], [91.8, 126.0], [91.9, 126.0], [92.0, 126.0], [92.1, 127.0], [92.2, 127.0], [92.3, 127.0], [92.4, 128.0], [92.5, 128.0], [92.6, 128.0], [92.7, 129.0], [92.8, 129.0], [92.9, 130.0], [93.0, 130.0], [93.1, 130.0], [93.2, 131.0], [93.3, 131.0], [93.4, 132.0], [93.5, 132.0], [93.6, 132.0], [93.7, 133.0], [93.8, 133.0], [93.9, 134.0], [94.0, 134.0], [94.1, 135.0], [94.2, 135.0], [94.3, 136.0], [94.4, 136.0], [94.5, 136.0], [94.6, 137.0], [94.7, 137.0], [94.8, 138.0], [94.9, 138.0], [95.0, 139.0], [95.1, 140.0], [95.2, 140.0], [95.3, 141.0], [95.4, 141.0], [95.5, 142.0], [95.6, 143.0], [95.7, 143.0], [95.8, 144.0], [95.9, 145.0], [96.0, 145.0], [96.1, 146.0], [96.2, 147.0], [96.3, 148.0], [96.4, 149.0], [96.5, 150.0], [96.6, 151.0], [96.7, 152.0], [96.8, 153.0], [96.9, 154.0], [97.0, 155.0], [97.1, 156.0], [97.2, 157.0], [97.3, 158.0], [97.4, 159.0], [97.5, 161.0], [97.6, 162.0], [97.7, 163.0], [97.8, 165.0], [97.9, 167.0], [98.0, 169.0], [98.1, 170.0], [98.2, 172.0], [98.3, 174.0], [98.4, 176.0], [98.5, 179.0], [98.6, 181.0], [98.7, 184.0], [98.8, 186.0], [98.9, 190.0], [99.0, 193.0], [99.1, 196.0], [99.2, 200.0], [99.3, 205.0], [99.4, 211.0], [99.5, 219.0], [99.6, 229.0], [99.7, 240.0], [99.8, 261.0], [99.9, 302.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 134668.0, "series": [{"data": [[0.0, 134668.0], [600.0, 3.0], [700.0, 18.0], [800.0, 21.0], [200.0, 1231.0], [900.0, 4.0], [1000.0, 5.0], [1100.0, 2.0], [300.0, 107.0], [1200.0, 2.0], [100.0, 36462.0], [400.0, 10.0], [500.0, 7.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 62.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 172478.0, "series": [{"data": [[0.0, 172478.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 62.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 49.89451144904734, "minX": 1.58306148E12, "maxY": 50.0, "series": [{"data": [[1.58306154E12, 50.0], [1.58306172E12, 50.0], [1.58306178E12, 49.89451144904734], [1.5830616E12, 50.0], [1.58306166E12, 50.0], [1.58306148E12, 50.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306178E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 48.0, "minX": 2.0, "maxY": 92.5, "series": [{"data": [[33.0, 77.0], [32.0, 80.5], [2.0, 88.5], [35.0, 73.0], [37.0, 70.0], [36.0, 58.5], [38.0, 57.0], [41.0, 86.66666666666667], [43.0, 84.0], [45.0, 81.5], [44.0, 76.0], [47.0, 90.25], [46.0, 67.0], [49.0, 48.0], [48.0, 71.0], [3.0, 63.0], [50.0, 86.7691594149117], [5.0, 73.0], [7.0, 78.0], [8.0, 55.0], [10.0, 92.5], [11.0, 78.0], [13.0, 57.0], [14.0, 59.0], [15.0, 55.0], [16.0, 72.0], [17.0, 75.0], [19.0, 74.5], [20.0, 76.0], [24.0, 85.25], [26.0, 79.0], [28.0, 78.0]], "isOverall": false, "label": "API call", "isController": false}, {"data": [[49.99300452069086, 86.76595572041194]], "isOverall": false, "label": "API call-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 62168.2, "minX": 1.58306148E12, "maxY": 2.67742035E7, "series": [{"data": [[1.58306154E12, 2.59649935E7], [1.58306172E12, 2.67742035E7], [1.58306178E12, 8121913.0], [1.5830616E12, 2.4132913666666668E7], [1.58306166E12, 2.53602155E7], [1.58306148E12, 1.2120404166666666E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58306154E12, 198745.9], [1.58306172E12, 204939.9], [1.58306178E12, 62168.2], [1.5830616E12, 184722.46666666667], [1.58306166E12, 194116.7], [1.58306148E12, 92774.16666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306178E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 79.40862695193397, "minX": 1.58306148E12, "maxY": 121.81915080527108, "series": [{"data": [[1.58306154E12, 81.87394406626713], [1.58306172E12, 79.40862695193397], [1.58306178E12, 79.61230554098913], [1.5830616E12, 88.08841696570386], [1.58306166E12, 83.82178744367081], [1.58306148E12, 121.81915080527108]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306178E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 79.34163153848206, "minX": 1.58306148E12, "maxY": 121.70775988287048, "series": [{"data": [[1.58306154E12, 81.80655567402069], [1.58306172E12, 79.34163153848206], [1.58306178E12, 79.5435238594653], [1.5830616E12, 88.01926583916696], [1.58306166E12, 83.7572424216981], [1.58306148E12, 121.70775988287048]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306178E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.03645377661125732, "minX": 1.58306148E12, "maxY": 0.1738799414348457, "series": [{"data": [[1.58306154E12, 0.042866125372481384], [1.58306172E12, 0.03645377661125732], [1.58306178E12, 0.036794266736584466], [1.5830616E12, 0.04747338078710498], [1.58306166E12, 0.0429087244940803], [1.58306148E12, 0.1738799414348457]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306178E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 15.0, "minX": 1.58306148E12, "maxY": 1226.0, "series": [{"data": [[1.58306154E12, 345.0], [1.58306172E12, 227.0], [1.58306178E12, 224.0], [1.5830616E12, 456.0], [1.58306166E12, 374.0], [1.58306148E12, 1226.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58306154E12, 15.0], [1.58306172E12, 17.0], [1.58306178E12, 15.0], [1.5830616E12, 17.0], [1.58306166E12, 15.0], [1.58306148E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58306154E12, 117.0], [1.58306172E12, 104.0], [1.58306178E12, 103.0], [1.5830616E12, 130.0], [1.58306166E12, 111.0], [1.58306148E12, 181.39999999999964]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58306154E12, 183.0], [1.58306172E12, 141.0], [1.58306178E12, 141.0], [1.5830616E12, 190.0], [1.58306166E12, 159.0], [1.58306148E12, 296.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58306154E12, 134.0], [1.58306172E12, 116.0], [1.58306178E12, 117.0], [1.5830616E12, 147.0], [1.58306166E12, 125.0], [1.58306148E12, 207.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306178E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 72.0, "minX": 16.0, "maxY": 727.5, "series": [{"data": [[16.0, 727.5], [161.0, 72.0], [178.0, 240.0], [257.0, 184.0], [277.0, 149.0], [300.0, 158.0], [298.0, 155.0], [312.0, 142.0], [323.0, 145.0], [332.0, 146.0], [324.0, 152.0], [336.0, 140.0], [344.0, 121.0], [359.0, 131.0], [367.0, 129.0], [360.0, 134.0], [352.0, 136.0], [374.0, 131.0], [371.0, 133.0], [391.0, 122.0], [388.0, 121.5], [385.0, 116.0], [392.0, 126.0], [399.0, 118.0], [407.0, 117.0], [405.0, 121.0], [418.0, 112.0], [429.0, 109.0], [416.0, 116.0], [435.0, 115.0], [432.0, 102.0], [442.0, 106.0], [434.0, 110.0], [444.0, 103.5], [451.0, 103.0], [463.0, 101.0], [450.0, 103.5], [461.0, 110.0], [473.0, 99.0], [474.0, 99.0], [471.0, 101.0], [476.0, 100.5], [478.0, 96.5], [466.0, 103.0], [472.0, 101.0], [477.0, 101.0], [481.0, 98.0], [494.0, 96.0], [485.0, 100.0], [501.0, 91.0], [510.0, 94.0], [507.0, 97.0], [498.0, 93.5], [496.0, 97.0], [505.0, 95.0], [508.0, 93.0], [504.0, 92.0], [518.0, 91.0], [512.0, 93.0], [527.0, 89.0], [537.0, 87.0], [540.0, 87.0], [514.0, 92.0], [516.0, 89.0], [517.0, 92.0], [513.0, 93.0], [528.0, 90.0], [534.0, 84.0], [524.0, 93.0], [555.0, 82.0], [573.0, 81.0], [574.0, 81.0], [545.0, 86.0], [556.0, 77.0], [548.0, 82.0], [570.0, 80.0], [551.0, 86.0], [603.0, 79.0], [602.0, 78.0], [581.0, 79.0], [582.0, 80.0], [583.0, 82.0], [579.0, 83.0], [580.0, 80.0], [600.0, 78.5], [605.0, 79.0], [597.0, 80.0], [599.0, 78.0], [598.0, 79.0], [589.0, 80.0], [606.0, 78.0], [594.0, 80.0], [585.0, 81.0], [587.0, 84.0], [604.0, 79.0], [638.0, 74.0], [623.0, 75.0], [620.0, 76.0], [618.0, 77.0], [625.0, 75.0], [612.0, 78.0], [629.0, 75.0], [628.0, 75.0], [627.0, 75.0], [631.0, 75.0], [630.0, 74.0], [639.0, 74.0], [624.0, 76.0], [635.0, 74.0], [632.0, 75.0], [613.0, 76.0], [614.0, 76.0], [633.0, 74.0], [634.0, 75.0], [609.0, 78.0], [610.0, 77.0], [611.0, 77.0], [608.0, 75.0], [636.0, 74.0], [637.0, 74.0], [647.0, 73.0], [652.0, 73.0], [643.0, 73.0], [642.0, 74.0], [641.0, 73.0], [646.0, 73.0], [645.0, 73.0], [644.0, 73.0], [640.0, 74.0], [653.0, 72.0], [654.0, 72.0], [655.0, 72.0], [648.0, 73.0], [650.0, 73.0], [651.0, 72.0], [658.0, 72.0], [657.0, 72.0], [660.0, 72.0], [649.0, 73.0], [656.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 660.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 72.0, "minX": 16.0, "maxY": 719.5, "series": [{"data": [[16.0, 719.5], [161.0, 72.0], [178.0, 240.0], [257.0, 184.0], [277.0, 149.0], [300.0, 158.0], [298.0, 155.0], [312.0, 142.0], [323.0, 145.0], [332.0, 146.0], [324.0, 152.0], [336.0, 139.0], [344.0, 120.5], [359.0, 131.0], [367.0, 129.0], [360.0, 133.5], [352.0, 135.5], [374.0, 131.0], [371.0, 133.0], [391.0, 122.0], [388.0, 121.0], [385.0, 116.0], [392.0, 126.0], [399.0, 118.0], [407.0, 117.0], [405.0, 121.0], [418.0, 112.0], [429.0, 109.0], [416.0, 116.0], [435.0, 114.0], [432.0, 102.0], [442.0, 106.0], [434.0, 110.0], [444.0, 103.5], [451.0, 103.0], [463.0, 101.0], [450.0, 103.0], [461.0, 110.0], [473.0, 99.0], [474.0, 99.0], [471.0, 101.0], [476.0, 100.0], [478.0, 96.0], [466.0, 103.0], [472.0, 101.0], [477.0, 100.0], [481.0, 98.0], [494.0, 95.5], [485.0, 100.0], [501.0, 91.0], [510.0, 94.0], [507.0, 97.0], [498.0, 93.0], [496.0, 97.0], [505.0, 95.0], [508.0, 93.0], [504.0, 92.0], [518.0, 91.0], [512.0, 93.0], [527.0, 89.0], [537.0, 87.0], [540.0, 87.0], [514.0, 91.5], [516.0, 89.0], [517.0, 92.0], [513.0, 93.0], [528.0, 90.0], [534.0, 84.0], [524.0, 93.0], [555.0, 82.0], [573.0, 81.0], [574.0, 81.0], [545.0, 86.0], [556.0, 77.0], [548.0, 82.0], [570.0, 80.0], [551.0, 86.0], [603.0, 79.0], [602.0, 78.0], [581.0, 79.0], [582.0, 80.0], [583.0, 82.0], [579.0, 83.0], [580.0, 80.0], [600.0, 78.0], [605.0, 79.0], [597.0, 80.0], [599.0, 78.0], [598.0, 79.0], [589.0, 80.0], [606.0, 78.0], [594.0, 80.0], [585.0, 81.0], [587.0, 84.0], [604.0, 79.0], [638.0, 74.0], [623.0, 75.0], [620.0, 76.0], [618.0, 77.0], [625.0, 75.0], [612.0, 78.0], [629.0, 75.0], [628.0, 75.0], [627.0, 75.0], [631.0, 75.0], [630.0, 74.0], [639.0, 74.0], [624.0, 76.0], [635.0, 74.0], [632.0, 75.0], [613.0, 76.0], [614.0, 76.0], [633.0, 74.0], [634.0, 74.0], [609.0, 78.0], [610.0, 77.0], [611.0, 77.0], [608.0, 75.0], [636.0, 74.0], [637.0, 74.0], [647.0, 73.0], [652.0, 73.0], [643.0, 73.0], [642.0, 74.0], [641.0, 73.0], [646.0, 73.0], [645.0, 73.0], [644.0, 73.0], [640.0, 74.0], [653.0, 72.0], [654.0, 72.0], [655.0, 72.0], [648.0, 73.0], [650.0, 73.0], [651.0, 72.0], [658.0, 72.0], [657.0, 72.0], [660.0, 72.0], [649.0, 73.0], [656.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 660.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 189.86666666666667, "minX": 1.58306148E12, "maxY": 628.65, "series": [{"data": [[1.58306154E12, 609.6666666666666], [1.58306172E12, 628.65], [1.58306178E12, 189.86666666666667], [1.5830616E12, 566.6333333333333], [1.58306166E12, 595.45], [1.58306148E12, 285.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306178E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 190.7, "minX": 1.58306148E12, "maxY": 628.65, "series": [{"data": [[1.58306154E12, 609.65], [1.58306172E12, 628.65], [1.58306178E12, 190.7], [1.5830616E12, 566.6333333333333], [1.58306166E12, 595.45], [1.58306148E12, 284.5833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306178E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 190.7, "minX": 1.58306148E12, "maxY": 628.65, "series": [{"data": [[1.58306154E12, 609.65], [1.58306172E12, 628.65], [1.58306178E12, 190.7], [1.5830616E12, 566.6333333333333], [1.58306166E12, 595.45], [1.58306148E12, 284.5833333333333]], "isOverall": false, "label": "API call-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306178E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 190.7, "minX": 1.58306148E12, "maxY": 628.65, "series": [{"data": [[1.58306154E12, 609.65], [1.58306172E12, 628.65], [1.58306178E12, 190.7], [1.5830616E12, 566.6333333333333], [1.58306166E12, 595.45], [1.58306148E12, 284.5833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306178E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

