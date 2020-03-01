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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 1183.0, "series": [{"data": [[0.0, 6.0], [0.1, 8.0], [0.2, 9.0], [0.3, 9.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 11.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 11.0], [1.3, 12.0], [1.4, 12.0], [1.5, 12.0], [1.6, 12.0], [1.7, 12.0], [1.8, 12.0], [1.9, 13.0], [2.0, 13.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 14.0], [2.8, 14.0], [2.9, 15.0], [3.0, 15.0], [3.1, 15.0], [3.2, 15.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 16.0], [3.7, 16.0], [3.8, 17.0], [3.9, 17.0], [4.0, 17.0], [4.1, 17.0], [4.2, 17.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 19.0], [4.8, 19.0], [4.9, 19.0], [5.0, 19.0], [5.1, 19.0], [5.2, 20.0], [5.3, 20.0], [5.4, 20.0], [5.5, 20.0], [5.6, 21.0], [5.7, 21.0], [5.8, 21.0], [5.9, 21.0], [6.0, 22.0], [6.1, 22.0], [6.2, 22.0], [6.3, 22.0], [6.4, 22.0], [6.5, 23.0], [6.6, 23.0], [6.7, 23.0], [6.8, 23.0], [6.9, 24.0], [7.0, 24.0], [7.1, 24.0], [7.2, 25.0], [7.3, 25.0], [7.4, 25.0], [7.5, 25.0], [7.6, 26.0], [7.7, 26.0], [7.8, 26.0], [7.9, 26.0], [8.0, 27.0], [8.1, 27.0], [8.2, 27.0], [8.3, 27.0], [8.4, 28.0], [8.5, 28.0], [8.6, 28.0], [8.7, 28.0], [8.8, 29.0], [8.9, 29.0], [9.0, 29.0], [9.1, 29.0], [9.2, 30.0], [9.3, 30.0], [9.4, 30.0], [9.5, 30.0], [9.6, 30.0], [9.7, 31.0], [9.8, 31.0], [9.9, 31.0], [10.0, 31.0], [10.1, 32.0], [10.2, 32.0], [10.3, 32.0], [10.4, 32.0], [10.5, 33.0], [10.6, 33.0], [10.7, 33.0], [10.8, 33.0], [10.9, 34.0], [11.0, 34.0], [11.1, 34.0], [11.2, 34.0], [11.3, 34.0], [11.4, 35.0], [11.5, 35.0], [11.6, 35.0], [11.7, 35.0], [11.8, 36.0], [11.9, 36.0], [12.0, 36.0], [12.1, 36.0], [12.2, 36.0], [12.3, 37.0], [12.4, 37.0], [12.5, 37.0], [12.6, 37.0], [12.7, 37.0], [12.8, 37.0], [12.9, 38.0], [13.0, 38.0], [13.1, 38.0], [13.2, 38.0], [13.3, 38.0], [13.4, 39.0], [13.5, 39.0], [13.6, 39.0], [13.7, 39.0], [13.8, 39.0], [13.9, 40.0], [14.0, 40.0], [14.1, 40.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 44.0], [16.4, 44.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 44.0], [16.9, 45.0], [17.0, 45.0], [17.1, 45.0], [17.2, 45.0], [17.3, 45.0], [17.4, 45.0], [17.5, 45.0], [17.6, 46.0], [17.7, 46.0], [17.8, 46.0], [17.9, 46.0], [18.0, 46.0], [18.1, 46.0], [18.2, 46.0], [18.3, 47.0], [18.4, 47.0], [18.5, 47.0], [18.6, 47.0], [18.7, 47.0], [18.8, 47.0], [18.9, 47.0], [19.0, 48.0], [19.1, 48.0], [19.2, 48.0], [19.3, 48.0], [19.4, 48.0], [19.5, 48.0], [19.6, 48.0], [19.7, 49.0], [19.8, 49.0], [19.9, 49.0], [20.0, 49.0], [20.1, 49.0], [20.2, 49.0], [20.3, 49.0], [20.4, 49.0], [20.5, 50.0], [20.6, 50.0], [20.7, 50.0], [20.8, 50.0], [20.9, 50.0], [21.0, 50.0], [21.1, 50.0], [21.2, 51.0], [21.3, 51.0], [21.4, 51.0], [21.5, 51.0], [21.6, 51.0], [21.7, 51.0], [21.8, 51.0], [21.9, 51.0], [22.0, 52.0], [22.1, 52.0], [22.2, 52.0], [22.3, 52.0], [22.4, 52.0], [22.5, 52.0], [22.6, 52.0], [22.7, 52.0], [22.8, 53.0], [22.9, 53.0], [23.0, 53.0], [23.1, 53.0], [23.2, 53.0], [23.3, 53.0], [23.4, 53.0], [23.5, 53.0], [23.6, 53.0], [23.7, 54.0], [23.8, 54.0], [23.9, 54.0], [24.0, 54.0], [24.1, 54.0], [24.2, 54.0], [24.3, 54.0], [24.4, 54.0], [24.5, 55.0], [24.6, 55.0], [24.7, 55.0], [24.8, 55.0], [24.9, 55.0], [25.0, 55.0], [25.1, 55.0], [25.2, 55.0], [25.3, 55.0], [25.4, 56.0], [25.5, 56.0], [25.6, 56.0], [25.7, 56.0], [25.8, 56.0], [25.9, 56.0], [26.0, 56.0], [26.1, 56.0], [26.2, 56.0], [26.3, 57.0], [26.4, 57.0], [26.5, 57.0], [26.6, 57.0], [26.7, 57.0], [26.8, 57.0], [26.9, 57.0], [27.0, 57.0], [27.1, 57.0], [27.2, 57.0], [27.3, 58.0], [27.4, 58.0], [27.5, 58.0], [27.6, 58.0], [27.7, 58.0], [27.8, 58.0], [27.9, 58.0], [28.0, 58.0], [28.1, 58.0], [28.2, 59.0], [28.3, 59.0], [28.4, 59.0], [28.5, 59.0], [28.6, 59.0], [28.7, 59.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 59.0], [29.2, 60.0], [29.3, 60.0], [29.4, 60.0], [29.5, 60.0], [29.6, 60.0], [29.7, 60.0], [29.8, 60.0], [29.9, 60.0], [30.0, 60.0], [30.1, 60.0], [30.2, 61.0], [30.3, 61.0], [30.4, 61.0], [30.5, 61.0], [30.6, 61.0], [30.7, 61.0], [30.8, 61.0], [30.9, 61.0], [31.0, 61.0], [31.1, 61.0], [31.2, 62.0], [31.3, 62.0], [31.4, 62.0], [31.5, 62.0], [31.6, 62.0], [31.7, 62.0], [31.8, 62.0], [31.9, 62.0], [32.0, 62.0], [32.1, 62.0], [32.2, 62.0], [32.3, 63.0], [32.4, 63.0], [32.5, 63.0], [32.6, 63.0], [32.7, 63.0], [32.8, 63.0], [32.9, 63.0], [33.0, 63.0], [33.1, 63.0], [33.2, 63.0], [33.3, 63.0], [33.4, 63.0], [33.5, 64.0], [33.6, 64.0], [33.7, 64.0], [33.8, 64.0], [33.9, 64.0], [34.0, 64.0], [34.1, 64.0], [34.2, 64.0], [34.3, 64.0], [34.4, 64.0], [34.5, 65.0], [34.6, 65.0], [34.7, 65.0], [34.8, 65.0], [34.9, 65.0], [35.0, 65.0], [35.1, 65.0], [35.2, 65.0], [35.3, 65.0], [35.4, 65.0], [35.5, 65.0], [35.6, 65.0], [35.7, 66.0], [35.8, 66.0], [35.9, 66.0], [36.0, 66.0], [36.1, 66.0], [36.2, 66.0], [36.3, 66.0], [36.4, 66.0], [36.5, 66.0], [36.6, 66.0], [36.7, 66.0], [36.8, 66.0], [36.9, 67.0], [37.0, 67.0], [37.1, 67.0], [37.2, 67.0], [37.3, 67.0], [37.4, 67.0], [37.5, 67.0], [37.6, 67.0], [37.7, 67.0], [37.8, 67.0], [37.9, 67.0], [38.0, 67.0], [38.1, 68.0], [38.2, 68.0], [38.3, 68.0], [38.4, 68.0], [38.5, 68.0], [38.6, 68.0], [38.7, 68.0], [38.8, 68.0], [38.9, 68.0], [39.0, 68.0], [39.1, 68.0], [39.2, 68.0], [39.3, 69.0], [39.4, 69.0], [39.5, 69.0], [39.6, 69.0], [39.7, 69.0], [39.8, 69.0], [39.9, 69.0], [40.0, 69.0], [40.1, 69.0], [40.2, 69.0], [40.3, 69.0], [40.4, 69.0], [40.5, 70.0], [40.6, 70.0], [40.7, 70.0], [40.8, 70.0], [40.9, 70.0], [41.0, 70.0], [41.1, 70.0], [41.2, 70.0], [41.3, 70.0], [41.4, 70.0], [41.5, 70.0], [41.6, 70.0], [41.7, 70.0], [41.8, 71.0], [41.9, 71.0], [42.0, 71.0], [42.1, 71.0], [42.2, 71.0], [42.3, 71.0], [42.4, 71.0], [42.5, 71.0], [42.6, 71.0], [42.7, 71.0], [42.8, 71.0], [42.9, 71.0], [43.0, 71.0], [43.1, 72.0], [43.2, 72.0], [43.3, 72.0], [43.4, 72.0], [43.5, 72.0], [43.6, 72.0], [43.7, 72.0], [43.8, 72.0], [43.9, 72.0], [44.0, 72.0], [44.1, 72.0], [44.2, 72.0], [44.3, 72.0], [44.4, 73.0], [44.5, 73.0], [44.6, 73.0], [44.7, 73.0], [44.8, 73.0], [44.9, 73.0], [45.0, 73.0], [45.1, 73.0], [45.2, 73.0], [45.3, 73.0], [45.4, 73.0], [45.5, 73.0], [45.6, 73.0], [45.7, 74.0], [45.8, 74.0], [45.9, 74.0], [46.0, 74.0], [46.1, 74.0], [46.2, 74.0], [46.3, 74.0], [46.4, 74.0], [46.5, 74.0], [46.6, 74.0], [46.7, 74.0], [46.8, 74.0], [46.9, 74.0], [47.0, 75.0], [47.1, 75.0], [47.2, 75.0], [47.3, 75.0], [47.4, 75.0], [47.5, 75.0], [47.6, 75.0], [47.7, 75.0], [47.8, 75.0], [47.9, 75.0], [48.0, 75.0], [48.1, 75.0], [48.2, 75.0], [48.3, 76.0], [48.4, 76.0], [48.5, 76.0], [48.6, 76.0], [48.7, 76.0], [48.8, 76.0], [48.9, 76.0], [49.0, 76.0], [49.1, 76.0], [49.2, 76.0], [49.3, 76.0], [49.4, 76.0], [49.5, 77.0], [49.6, 77.0], [49.7, 77.0], [49.8, 77.0], [49.9, 77.0], [50.0, 77.0], [50.1, 77.0], [50.2, 77.0], [50.3, 77.0], [50.4, 77.0], [50.5, 77.0], [50.6, 77.0], [50.7, 77.0], [50.8, 78.0], [50.9, 78.0], [51.0, 78.0], [51.1, 78.0], [51.2, 78.0], [51.3, 78.0], [51.4, 78.0], [51.5, 78.0], [51.6, 78.0], [51.7, 78.0], [51.8, 78.0], [51.9, 78.0], [52.0, 78.0], [52.1, 79.0], [52.2, 79.0], [52.3, 79.0], [52.4, 79.0], [52.5, 79.0], [52.6, 79.0], [52.7, 79.0], [52.8, 79.0], [52.9, 79.0], [53.0, 79.0], [53.1, 79.0], [53.2, 79.0], [53.3, 79.0], [53.4, 80.0], [53.5, 80.0], [53.6, 80.0], [53.7, 80.0], [53.8, 80.0], [53.9, 80.0], [54.0, 80.0], [54.1, 80.0], [54.2, 80.0], [54.3, 80.0], [54.4, 80.0], [54.5, 80.0], [54.6, 81.0], [54.7, 81.0], [54.8, 81.0], [54.9, 81.0], [55.0, 81.0], [55.1, 81.0], [55.2, 81.0], [55.3, 81.0], [55.4, 81.0], [55.5, 81.0], [55.6, 81.0], [55.7, 81.0], [55.8, 81.0], [55.9, 82.0], [56.0, 82.0], [56.1, 82.0], [56.2, 82.0], [56.3, 82.0], [56.4, 82.0], [56.5, 82.0], [56.6, 82.0], [56.7, 82.0], [56.8, 82.0], [56.9, 82.0], [57.0, 82.0], [57.1, 82.0], [57.2, 83.0], [57.3, 83.0], [57.4, 83.0], [57.5, 83.0], [57.6, 83.0], [57.7, 83.0], [57.8, 83.0], [57.9, 83.0], [58.0, 83.0], [58.1, 83.0], [58.2, 83.0], [58.3, 83.0], [58.4, 84.0], [58.5, 84.0], [58.6, 84.0], [58.7, 84.0], [58.8, 84.0], [58.9, 84.0], [59.0, 84.0], [59.1, 84.0], [59.2, 84.0], [59.3, 84.0], [59.4, 84.0], [59.5, 84.0], [59.6, 84.0], [59.7, 85.0], [59.8, 85.0], [59.9, 85.0], [60.0, 85.0], [60.1, 85.0], [60.2, 85.0], [60.3, 85.0], [60.4, 85.0], [60.5, 85.0], [60.6, 85.0], [60.7, 85.0], [60.8, 85.0], [60.9, 86.0], [61.0, 86.0], [61.1, 86.0], [61.2, 86.0], [61.3, 86.0], [61.4, 86.0], [61.5, 86.0], [61.6, 86.0], [61.7, 86.0], [61.8, 86.0], [61.9, 86.0], [62.0, 86.0], [62.1, 87.0], [62.2, 87.0], [62.3, 87.0], [62.4, 87.0], [62.5, 87.0], [62.6, 87.0], [62.7, 87.0], [62.8, 87.0], [62.9, 87.0], [63.0, 87.0], [63.1, 87.0], [63.2, 87.0], [63.3, 88.0], [63.4, 88.0], [63.5, 88.0], [63.6, 88.0], [63.7, 88.0], [63.8, 88.0], [63.9, 88.0], [64.0, 88.0], [64.1, 88.0], [64.2, 88.0], [64.3, 88.0], [64.4, 89.0], [64.5, 89.0], [64.6, 89.0], [64.7, 89.0], [64.8, 89.0], [64.9, 89.0], [65.0, 89.0], [65.1, 89.0], [65.2, 89.0], [65.3, 89.0], [65.4, 89.0], [65.5, 90.0], [65.6, 90.0], [65.7, 90.0], [65.8, 90.0], [65.9, 90.0], [66.0, 90.0], [66.1, 90.0], [66.2, 90.0], [66.3, 90.0], [66.4, 90.0], [66.5, 90.0], [66.6, 91.0], [66.7, 91.0], [66.8, 91.0], [66.9, 91.0], [67.0, 91.0], [67.1, 91.0], [67.2, 91.0], [67.3, 91.0], [67.4, 91.0], [67.5, 91.0], [67.6, 91.0], [67.7, 92.0], [67.8, 92.0], [67.9, 92.0], [68.0, 92.0], [68.1, 92.0], [68.2, 92.0], [68.3, 92.0], [68.4, 92.0], [68.5, 92.0], [68.6, 92.0], [68.7, 92.0], [68.8, 93.0], [68.9, 93.0], [69.0, 93.0], [69.1, 93.0], [69.2, 93.0], [69.3, 93.0], [69.4, 93.0], [69.5, 93.0], [69.6, 93.0], [69.7, 93.0], [69.8, 94.0], [69.9, 94.0], [70.0, 94.0], [70.1, 94.0], [70.2, 94.0], [70.3, 94.0], [70.4, 94.0], [70.5, 94.0], [70.6, 94.0], [70.7, 94.0], [70.8, 95.0], [70.9, 95.0], [71.0, 95.0], [71.1, 95.0], [71.2, 95.0], [71.3, 95.0], [71.4, 95.0], [71.5, 95.0], [71.6, 95.0], [71.7, 96.0], [71.8, 96.0], [71.9, 96.0], [72.0, 96.0], [72.1, 96.0], [72.2, 96.0], [72.3, 96.0], [72.4, 96.0], [72.5, 96.0], [72.6, 96.0], [72.7, 97.0], [72.8, 97.0], [72.9, 97.0], [73.0, 97.0], [73.1, 97.0], [73.2, 97.0], [73.3, 97.0], [73.4, 97.0], [73.5, 97.0], [73.6, 98.0], [73.7, 98.0], [73.8, 98.0], [73.9, 98.0], [74.0, 98.0], [74.1, 98.0], [74.2, 98.0], [74.3, 98.0], [74.4, 98.0], [74.5, 99.0], [74.6, 99.0], [74.7, 99.0], [74.8, 99.0], [74.9, 99.0], [75.0, 99.0], [75.1, 99.0], [75.2, 99.0], [75.3, 100.0], [75.4, 100.0], [75.5, 100.0], [75.6, 100.0], [75.7, 100.0], [75.8, 100.0], [75.9, 100.0], [76.0, 100.0], [76.1, 101.0], [76.2, 101.0], [76.3, 101.0], [76.4, 101.0], [76.5, 101.0], [76.6, 101.0], [76.7, 101.0], [76.8, 101.0], [76.9, 102.0], [77.0, 102.0], [77.1, 102.0], [77.2, 102.0], [77.3, 102.0], [77.4, 102.0], [77.5, 102.0], [77.6, 102.0], [77.7, 103.0], [77.8, 103.0], [77.9, 103.0], [78.0, 103.0], [78.1, 103.0], [78.2, 103.0], [78.3, 103.0], [78.4, 103.0], [78.5, 104.0], [78.6, 104.0], [78.7, 104.0], [78.8, 104.0], [78.9, 104.0], [79.0, 104.0], [79.1, 104.0], [79.2, 105.0], [79.3, 105.0], [79.4, 105.0], [79.5, 105.0], [79.6, 105.0], [79.7, 105.0], [79.8, 105.0], [79.9, 106.0], [80.0, 106.0], [80.1, 106.0], [80.2, 106.0], [80.3, 106.0], [80.4, 106.0], [80.5, 106.0], [80.6, 107.0], [80.7, 107.0], [80.8, 107.0], [80.9, 107.0], [81.0, 107.0], [81.1, 107.0], [81.2, 107.0], [81.3, 108.0], [81.4, 108.0], [81.5, 108.0], [81.6, 108.0], [81.7, 108.0], [81.8, 108.0], [81.9, 109.0], [82.0, 109.0], [82.1, 109.0], [82.2, 109.0], [82.3, 109.0], [82.4, 109.0], [82.5, 110.0], [82.6, 110.0], [82.7, 110.0], [82.8, 110.0], [82.9, 110.0], [83.0, 110.0], [83.1, 111.0], [83.2, 111.0], [83.3, 111.0], [83.4, 111.0], [83.5, 111.0], [83.6, 112.0], [83.7, 112.0], [83.8, 112.0], [83.9, 112.0], [84.0, 112.0], [84.1, 113.0], [84.2, 113.0], [84.3, 113.0], [84.4, 113.0], [84.5, 113.0], [84.6, 114.0], [84.7, 114.0], [84.8, 114.0], [84.9, 114.0], [85.0, 114.0], [85.1, 115.0], [85.2, 115.0], [85.3, 115.0], [85.4, 115.0], [85.5, 115.0], [85.6, 116.0], [85.7, 116.0], [85.8, 116.0], [85.9, 116.0], [86.0, 116.0], [86.1, 117.0], [86.2, 117.0], [86.3, 117.0], [86.4, 117.0], [86.5, 118.0], [86.6, 118.0], [86.7, 118.0], [86.8, 118.0], [86.9, 119.0], [87.0, 119.0], [87.1, 119.0], [87.2, 119.0], [87.3, 120.0], [87.4, 120.0], [87.5, 120.0], [87.6, 120.0], [87.7, 121.0], [87.8, 121.0], [87.9, 121.0], [88.0, 122.0], [88.1, 122.0], [88.2, 122.0], [88.3, 122.0], [88.4, 123.0], [88.5, 123.0], [88.6, 123.0], [88.7, 123.0], [88.8, 124.0], [88.9, 124.0], [89.0, 124.0], [89.1, 125.0], [89.2, 125.0], [89.3, 125.0], [89.4, 126.0], [89.5, 126.0], [89.6, 126.0], [89.7, 127.0], [89.8, 127.0], [89.9, 127.0], [90.0, 128.0], [90.1, 128.0], [90.2, 128.0], [90.3, 129.0], [90.4, 129.0], [90.5, 129.0], [90.6, 130.0], [90.7, 130.0], [90.8, 130.0], [90.9, 131.0], [91.0, 131.0], [91.1, 131.0], [91.2, 132.0], [91.3, 132.0], [91.4, 133.0], [91.5, 133.0], [91.6, 133.0], [91.7, 134.0], [91.8, 134.0], [91.9, 135.0], [92.0, 135.0], [92.1, 135.0], [92.2, 136.0], [92.3, 136.0], [92.4, 137.0], [92.5, 137.0], [92.6, 138.0], [92.7, 138.0], [92.8, 139.0], [92.9, 139.0], [93.0, 140.0], [93.1, 140.0], [93.2, 141.0], [93.3, 141.0], [93.4, 142.0], [93.5, 142.0], [93.6, 143.0], [93.7, 143.0], [93.8, 144.0], [93.9, 144.0], [94.0, 145.0], [94.1, 146.0], [94.2, 146.0], [94.3, 147.0], [94.4, 147.0], [94.5, 148.0], [94.6, 149.0], [94.7, 149.0], [94.8, 150.0], [94.9, 151.0], [95.0, 151.0], [95.1, 152.0], [95.2, 153.0], [95.3, 153.0], [95.4, 154.0], [95.5, 155.0], [95.6, 156.0], [95.7, 156.0], [95.8, 157.0], [95.9, 158.0], [96.0, 159.0], [96.1, 160.0], [96.2, 161.0], [96.3, 161.0], [96.4, 162.0], [96.5, 163.0], [96.6, 164.0], [96.7, 165.0], [96.8, 166.0], [96.9, 167.0], [97.0, 169.0], [97.1, 170.0], [97.2, 171.0], [97.3, 173.0], [97.4, 174.0], [97.5, 175.0], [97.6, 177.0], [97.7, 178.0], [97.8, 180.0], [97.9, 182.0], [98.0, 183.0], [98.1, 185.0], [98.2, 187.0], [98.3, 189.0], [98.4, 192.0], [98.5, 195.0], [98.6, 197.0], [98.7, 200.0], [98.8, 204.0], [98.9, 207.0], [99.0, 211.0], [99.1, 216.0], [99.2, 221.0], [99.3, 226.0], [99.4, 233.0], [99.5, 240.0], [99.6, 251.0], [99.7, 266.0], [99.8, 287.0], [99.9, 330.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 140364.0, "series": [{"data": [[0.0, 140364.0], [1100.0, 2.0], [300.0, 225.0], [600.0, 7.0], [700.0, 9.0], [400.0, 39.0], [200.0, 2163.0], [800.0, 4.0], [100.0, 43740.0], [900.0, 3.0], [500.0, 18.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 186531.0, "series": [{"data": [[0.0, 186531.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 43.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.93952712943318, "minX": 1.58307672E12, "maxY": 50.0, "series": [{"data": [[1.58307678E12, 50.0], [1.58307672E12, 50.0], [1.5830769E12, 50.0], [1.58307684E12, 50.0], [1.58307702E12, 49.93952712943318], [1.58307696E12, 50.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 39.0, "minX": 1.0, "maxY": 167.0, "series": [{"data": [[33.0, 46.5], [32.0, 165.0], [34.0, 65.0], [37.0, 85.33333333333333], [38.0, 93.0], [41.0, 52.0], [40.0, 66.0], [43.0, 83.0], [42.0, 40.0], [47.0, 83.0], [49.0, 72.5], [50.0, 80.23907507385097], [4.0, 112.5], [5.0, 109.0], [6.0, 83.0], [7.0, 79.0], [8.0, 66.0], [9.0, 72.0], [10.0, 83.0], [11.0, 90.0], [12.0, 75.0], [15.0, 100.5], [16.0, 80.5], [1.0, 167.0], [17.0, 79.0], [18.0, 92.0], [19.0, 90.0], [21.0, 126.5], [22.0, 106.0], [25.0, 64.33333333333333], [26.0, 52.0], [27.0, 82.0], [29.0, 39.0], [31.0, 47.5]], "isOverall": false, "label": "API call", "isController": false}, {"data": [[49.993584315070706, 80.23952426383045]], "isOverall": false, "label": "API call-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 75007.16666666667, "minX": 1.58307672E12, "maxY": 2.7459192666666668E7, "series": [{"data": [[1.58307678E12, 2.7447835333333332E7], [1.58307672E12, 9799249.166666666], [1.5830769E12, 2.6419286833333332E7], [1.58307684E12, 2.7459192666666668E7], [1.58307702E12, 1.4050441E7], [1.58307696E12, 2.7260439333333332E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58307678E12, 210096.13333333333], [1.58307672E12, 75007.16666666667], [1.5830769E12, 202223.23333333334], [1.58307684E12, 210183.06666666668], [1.58307702E12, 107547.4], [1.58307696E12, 208661.73333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 77.41988935994185, "minX": 1.58307672E12, "maxY": 105.35146685983308, "series": [{"data": [[1.58307678E12, 77.4557256646326], [1.58307672E12, 105.35146685983308], [1.5830769E12, 80.47228566054994], [1.58307684E12, 77.41988935994185], [1.58307702E12, 77.60008083257524], [1.58307696E12, 77.99054785959777]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 77.35880467376785, "minX": 1.58307672E12, "maxY": 105.24128938790298, "series": [{"data": [[1.58307678E12, 77.39355539464161], [1.58307672E12, 105.24128938790298], [1.5830769E12, 80.41038179424416], [1.58307684E12, 77.35880467376785], [1.58307702E12, 77.53920379913063], [1.58307696E12, 77.92870534319303]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03334343740527439, "minX": 1.58307672E12, "maxY": 0.18572980804056582, "series": [{"data": [[1.58307678E12, 0.03744698458673834], [1.58307672E12, 0.18572980804056582], [1.5830769E12, 0.039710900346596675], [1.58307684E12, 0.03748319718746752], [1.58307702E12, 0.03334343740527439], [1.58307696E12, 0.03541297781481118]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.58307672E12, "maxY": 1183.0, "series": [{"data": [[1.58307678E12, 508.0], [1.58307672E12, 1183.0], [1.5830769E12, 590.0], [1.58307684E12, 400.0], [1.58307702E12, 441.0], [1.58307696E12, 636.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58307678E12, 6.0], [1.58307672E12, 8.0], [1.5830769E12, 7.0], [1.58307684E12, 7.0], [1.58307702E12, 6.0], [1.58307696E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58307678E12, 123.0], [1.58307672E12, 172.0], [1.5830769E12, 137.0], [1.58307684E12, 121.0], [1.58307702E12, 123.0], [1.58307696E12, 123.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58307678E12, 197.9900000000016], [1.58307672E12, 323.0], [1.5830769E12, 239.0], [1.58307684E12, 196.9900000000016], [1.58307702E12, 191.0], [1.58307696E12, 189.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58307678E12, 145.0], [1.58307672E12, 208.0], [1.5830769E12, 166.0], [1.58307684E12, 143.0], [1.58307702E12, 142.0], [1.58307696E12, 143.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 61.0, "minX": 133.0, "maxY": 323.0, "series": [{"data": [[133.0, 323.0], [277.0, 178.0], [286.0, 163.5], [340.0, 144.0], [373.0, 127.0], [385.0, 123.0], [418.0, 98.0], [423.0, 109.0], [424.0, 101.0], [425.0, 110.0], [439.0, 100.0], [446.0, 96.0], [444.0, 103.0], [455.0, 98.0], [452.0, 103.0], [448.0, 98.0], [453.0, 96.0], [465.0, 99.0], [467.0, 97.0], [474.0, 94.0], [472.0, 95.0], [495.0, 93.0], [493.0, 80.0], [483.0, 93.0], [482.0, 95.5], [502.0, 92.0], [508.0, 89.5], [534.0, 87.5], [527.0, 88.0], [513.0, 84.0], [531.0, 90.0], [520.0, 88.0], [512.0, 92.0], [525.0, 87.0], [555.0, 85.0], [566.0, 83.0], [546.0, 84.5], [567.0, 81.0], [572.0, 88.0], [556.0, 86.0], [581.0, 80.0], [600.0, 77.0], [590.0, 83.0], [605.0, 79.0], [607.0, 75.0], [587.0, 81.0], [584.0, 80.0], [579.0, 83.0], [602.0, 80.5], [601.0, 80.0], [635.0, 77.0], [630.0, 76.0], [631.0, 76.0], [629.0, 75.0], [628.0, 77.0], [625.0, 79.0], [624.0, 78.0], [639.0, 76.0], [621.0, 80.0], [608.0, 79.0], [638.0, 77.0], [636.0, 77.0], [613.0, 78.0], [634.0, 75.0], [617.0, 79.0], [616.0, 81.0], [632.0, 77.0], [633.0, 76.0], [665.0, 73.0], [642.0, 76.0], [655.0, 74.0], [649.0, 75.0], [648.0, 75.0], [650.0, 75.0], [653.0, 74.0], [651.0, 76.0], [652.0, 75.0], [654.0, 77.0], [668.0, 72.0], [657.0, 74.0], [641.0, 76.0], [640.0, 78.0], [667.0, 74.0], [666.0, 70.0], [664.0, 74.0], [647.0, 77.0], [645.0, 77.0], [646.0, 76.0], [643.0, 76.0], [644.0, 75.0], [659.0, 74.0], [658.0, 75.0], [661.0, 75.0], [660.0, 75.0], [662.0, 74.0], [663.0, 72.0], [669.0, 73.0], [656.0, 74.0], [679.0, 73.0], [673.0, 70.0], [675.0, 69.0], [680.0, 68.0], [688.0, 61.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 688.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 61.0, "minX": 133.0, "maxY": 323.0, "series": [{"data": [[133.0, 323.0], [277.0, 178.0], [286.0, 163.5], [340.0, 144.0], [373.0, 127.0], [385.0, 123.0], [418.0, 98.0], [423.0, 109.0], [424.0, 101.0], [425.0, 110.0], [439.0, 99.0], [446.0, 96.0], [444.0, 103.0], [455.0, 98.0], [452.0, 102.5], [448.0, 98.0], [453.0, 96.0], [465.0, 99.0], [467.0, 97.0], [474.0, 94.0], [472.0, 95.0], [495.0, 92.0], [493.0, 80.0], [483.0, 93.0], [482.0, 95.5], [502.0, 92.0], [508.0, 89.5], [534.0, 87.5], [527.0, 87.0], [513.0, 83.0], [531.0, 90.0], [520.0, 88.0], [512.0, 92.0], [525.0, 87.0], [555.0, 85.0], [566.0, 83.0], [546.0, 84.0], [567.0, 81.0], [572.0, 88.0], [556.0, 86.0], [581.0, 80.0], [600.0, 76.0], [590.0, 83.0], [605.0, 79.0], [607.0, 75.0], [587.0, 81.0], [584.0, 80.0], [579.0, 83.0], [602.0, 80.5], [601.0, 80.0], [635.0, 77.0], [630.0, 76.0], [631.0, 76.0], [629.0, 75.0], [628.0, 77.0], [625.0, 79.0], [624.0, 78.0], [639.0, 76.0], [621.0, 80.0], [608.0, 79.0], [638.0, 77.0], [636.0, 77.0], [613.0, 78.0], [634.0, 75.0], [617.0, 79.0], [616.0, 81.0], [632.0, 77.0], [633.0, 75.0], [665.0, 73.0], [642.0, 76.0], [655.0, 74.0], [649.0, 75.0], [648.0, 75.0], [650.0, 75.0], [653.0, 74.0], [651.0, 76.0], [652.0, 75.0], [654.0, 76.0], [668.0, 72.0], [657.0, 74.0], [641.0, 76.0], [640.0, 78.0], [667.0, 73.0], [666.0, 70.0], [664.0, 74.0], [647.0, 77.0], [645.0, 77.0], [646.0, 76.0], [643.0, 76.0], [644.0, 75.0], [659.0, 74.0], [658.0, 75.0], [661.0, 75.0], [660.0, 75.0], [662.0, 74.0], [663.0, 72.0], [669.0, 73.0], [656.0, 74.0], [679.0, 73.0], [673.0, 70.0], [675.0, 69.0], [680.0, 68.0], [688.0, 61.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 688.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 230.91666666666666, "minX": 1.58307672E12, "maxY": 644.7166666666667, "series": [{"data": [[1.58307678E12, 644.4666666666667], [1.58307672E12, 230.91666666666666], [1.5830769E12, 620.3333333333334], [1.58307684E12, 644.7166666666667], [1.58307702E12, 329.06666666666666], [1.58307696E12, 640.0666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307702E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 230.08333333333334, "minX": 1.58307672E12, "maxY": 644.7333333333333, "series": [{"data": [[1.58307678E12, 644.4666666666667], [1.58307672E12, 230.08333333333334], [1.5830769E12, 620.3166666666667], [1.58307684E12, 644.7333333333333], [1.58307702E12, 329.9], [1.58307696E12, 640.0666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 230.08333333333334, "minX": 1.58307672E12, "maxY": 644.7333333333333, "series": [{"data": [[1.58307678E12, 644.4666666666667], [1.58307672E12, 230.08333333333334], [1.5830769E12, 620.3166666666667], [1.58307684E12, 644.7333333333333], [1.58307702E12, 329.9], [1.58307696E12, 640.0666666666667]], "isOverall": false, "label": "API call-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 230.08333333333334, "minX": 1.58307672E12, "maxY": 644.7333333333333, "series": [{"data": [[1.58307678E12, 644.4666666666667], [1.58307672E12, 230.08333333333334], [1.5830769E12, 620.3166666666667], [1.58307684E12, 644.7333333333333], [1.58307702E12, 329.9], [1.58307696E12, 640.0666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307702E12, "title": "Total Transactions Per Second"}},
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

