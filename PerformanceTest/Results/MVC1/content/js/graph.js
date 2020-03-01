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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 754.0, "series": [{"data": [[0.0, 21.0], [0.1, 38.0], [0.2, 41.0], [0.3, 43.0], [0.4, 45.0], [0.5, 46.0], [0.6, 47.0], [0.7, 48.0], [0.8, 49.0], [0.9, 49.0], [1.0, 49.0], [1.1, 50.0], [1.2, 50.0], [1.3, 51.0], [1.4, 51.0], [1.5, 51.0], [1.6, 51.0], [1.7, 52.0], [1.8, 52.0], [1.9, 52.0], [2.0, 52.0], [2.1, 52.0], [2.2, 53.0], [2.3, 53.0], [2.4, 53.0], [2.5, 53.0], [2.6, 53.0], [2.7, 53.0], [2.8, 54.0], [2.9, 54.0], [3.0, 54.0], [3.1, 54.0], [3.2, 54.0], [3.3, 54.0], [3.4, 55.0], [3.5, 55.0], [3.6, 55.0], [3.7, 55.0], [3.8, 55.0], [3.9, 55.0], [4.0, 56.0], [4.1, 56.0], [4.2, 56.0], [4.3, 56.0], [4.4, 56.0], [4.5, 56.0], [4.6, 56.0], [4.7, 57.0], [4.8, 57.0], [4.9, 57.0], [5.0, 57.0], [5.1, 57.0], [5.2, 57.0], [5.3, 57.0], [5.4, 57.0], [5.5, 58.0], [5.6, 58.0], [5.7, 58.0], [5.8, 58.0], [5.9, 58.0], [6.0, 58.0], [6.1, 58.0], [6.2, 59.0], [6.3, 59.0], [6.4, 59.0], [6.5, 59.0], [6.6, 59.0], [6.7, 59.0], [6.8, 59.0], [6.9, 59.0], [7.0, 60.0], [7.1, 60.0], [7.2, 60.0], [7.3, 60.0], [7.4, 60.0], [7.5, 60.0], [7.6, 60.0], [7.7, 60.0], [7.8, 61.0], [7.9, 61.0], [8.0, 61.0], [8.1, 61.0], [8.2, 61.0], [8.3, 61.0], [8.4, 61.0], [8.5, 61.0], [8.6, 61.0], [8.7, 61.0], [8.8, 62.0], [8.9, 62.0], [9.0, 62.0], [9.1, 62.0], [9.2, 62.0], [9.3, 62.0], [9.4, 62.0], [9.5, 62.0], [9.6, 62.0], [9.7, 62.0], [9.8, 62.0], [9.9, 62.0], [10.0, 63.0], [10.1, 63.0], [10.2, 63.0], [10.3, 63.0], [10.4, 63.0], [10.5, 63.0], [10.6, 63.0], [10.7, 63.0], [10.8, 63.0], [10.9, 63.0], [11.0, 63.0], [11.1, 63.0], [11.2, 63.0], [11.3, 63.0], [11.4, 64.0], [11.5, 64.0], [11.6, 64.0], [11.7, 64.0], [11.8, 64.0], [11.9, 64.0], [12.0, 64.0], [12.1, 64.0], [12.2, 64.0], [12.3, 64.0], [12.4, 64.0], [12.5, 64.0], [12.6, 64.0], [12.7, 64.0], [12.8, 64.0], [12.9, 64.0], [13.0, 64.0], [13.1, 64.0], [13.2, 65.0], [13.3, 65.0], [13.4, 65.0], [13.5, 65.0], [13.6, 65.0], [13.7, 65.0], [13.8, 65.0], [13.9, 65.0], [14.0, 65.0], [14.1, 65.0], [14.2, 65.0], [14.3, 65.0], [14.4, 65.0], [14.5, 65.0], [14.6, 65.0], [14.7, 65.0], [14.8, 65.0], [14.9, 65.0], [15.0, 65.0], [15.1, 65.0], [15.2, 65.0], [15.3, 65.0], [15.4, 65.0], [15.5, 66.0], [15.6, 66.0], [15.7, 66.0], [15.8, 66.0], [15.9, 66.0], [16.0, 66.0], [16.1, 66.0], [16.2, 66.0], [16.3, 66.0], [16.4, 66.0], [16.5, 66.0], [16.6, 66.0], [16.7, 66.0], [16.8, 66.0], [16.9, 66.0], [17.0, 66.0], [17.1, 66.0], [17.2, 66.0], [17.3, 66.0], [17.4, 66.0], [17.5, 66.0], [17.6, 66.0], [17.7, 66.0], [17.8, 66.0], [17.9, 66.0], [18.0, 66.0], [18.1, 67.0], [18.2, 67.0], [18.3, 67.0], [18.4, 67.0], [18.5, 67.0], [18.6, 67.0], [18.7, 67.0], [18.8, 67.0], [18.9, 67.0], [19.0, 67.0], [19.1, 67.0], [19.2, 67.0], [19.3, 67.0], [19.4, 67.0], [19.5, 67.0], [19.6, 67.0], [19.7, 67.0], [19.8, 67.0], [19.9, 67.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 67.0], [20.4, 67.0], [20.5, 67.0], [20.6, 67.0], [20.7, 67.0], [20.8, 67.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 68.0], [21.4, 68.0], [21.5, 68.0], [21.6, 68.0], [21.7, 68.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 68.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 68.0], [23.6, 68.0], [23.7, 68.0], [23.8, 68.0], [23.9, 68.0], [24.0, 68.0], [24.1, 68.0], [24.2, 68.0], [24.3, 68.0], [24.4, 68.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 69.0], [24.9, 69.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 69.0], [25.9, 69.0], [26.0, 69.0], [26.1, 69.0], [26.2, 69.0], [26.3, 69.0], [26.4, 69.0], [26.5, 69.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 69.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 69.0], [27.6, 69.0], [27.7, 69.0], [27.8, 69.0], [27.9, 69.0], [28.0, 69.0], [28.1, 69.0], [28.2, 69.0], [28.3, 69.0], [28.4, 69.0], [28.5, 69.0], [28.6, 70.0], [28.7, 70.0], [28.8, 70.0], [28.9, 70.0], [29.0, 70.0], [29.1, 70.0], [29.2, 70.0], [29.3, 70.0], [29.4, 70.0], [29.5, 70.0], [29.6, 70.0], [29.7, 70.0], [29.8, 70.0], [29.9, 70.0], [30.0, 70.0], [30.1, 70.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 70.0], [30.9, 70.0], [31.0, 70.0], [31.1, 70.0], [31.2, 70.0], [31.3, 70.0], [31.4, 70.0], [31.5, 70.0], [31.6, 70.0], [31.7, 70.0], [31.8, 70.0], [31.9, 70.0], [32.0, 70.0], [32.1, 70.0], [32.2, 70.0], [32.3, 70.0], [32.4, 70.0], [32.5, 71.0], [32.6, 71.0], [32.7, 71.0], [32.8, 71.0], [32.9, 71.0], [33.0, 71.0], [33.1, 71.0], [33.2, 71.0], [33.3, 71.0], [33.4, 71.0], [33.5, 71.0], [33.6, 71.0], [33.7, 71.0], [33.8, 71.0], [33.9, 71.0], [34.0, 71.0], [34.1, 71.0], [34.2, 71.0], [34.3, 71.0], [34.4, 71.0], [34.5, 71.0], [34.6, 71.0], [34.7, 71.0], [34.8, 71.0], [34.9, 71.0], [35.0, 71.0], [35.1, 71.0], [35.2, 71.0], [35.3, 71.0], [35.4, 71.0], [35.5, 71.0], [35.6, 71.0], [35.7, 71.0], [35.8, 71.0], [35.9, 71.0], [36.0, 71.0], [36.1, 71.0], [36.2, 71.0], [36.3, 71.0], [36.4, 72.0], [36.5, 72.0], [36.6, 72.0], [36.7, 72.0], [36.8, 72.0], [36.9, 72.0], [37.0, 72.0], [37.1, 72.0], [37.2, 72.0], [37.3, 72.0], [37.4, 72.0], [37.5, 72.0], [37.6, 72.0], [37.7, 72.0], [37.8, 72.0], [37.9, 72.0], [38.0, 72.0], [38.1, 72.0], [38.2, 72.0], [38.3, 72.0], [38.4, 72.0], [38.5, 72.0], [38.6, 72.0], [38.7, 72.0], [38.8, 72.0], [38.9, 72.0], [39.0, 72.0], [39.1, 72.0], [39.2, 72.0], [39.3, 72.0], [39.4, 72.0], [39.5, 72.0], [39.6, 72.0], [39.7, 72.0], [39.8, 72.0], [39.9, 72.0], [40.0, 72.0], [40.1, 72.0], [40.2, 73.0], [40.3, 73.0], [40.4, 73.0], [40.5, 73.0], [40.6, 73.0], [40.7, 73.0], [40.8, 73.0], [40.9, 73.0], [41.0, 73.0], [41.1, 73.0], [41.2, 73.0], [41.3, 73.0], [41.4, 73.0], [41.5, 73.0], [41.6, 73.0], [41.7, 73.0], [41.8, 73.0], [41.9, 73.0], [42.0, 73.0], [42.1, 73.0], [42.2, 73.0], [42.3, 73.0], [42.4, 73.0], [42.5, 73.0], [42.6, 73.0], [42.7, 73.0], [42.8, 73.0], [42.9, 73.0], [43.0, 73.0], [43.1, 73.0], [43.2, 73.0], [43.3, 73.0], [43.4, 73.0], [43.5, 73.0], [43.6, 73.0], [43.7, 73.0], [43.8, 74.0], [43.9, 74.0], [44.0, 74.0], [44.1, 74.0], [44.2, 74.0], [44.3, 74.0], [44.4, 74.0], [44.5, 74.0], [44.6, 74.0], [44.7, 74.0], [44.8, 74.0], [44.9, 74.0], [45.0, 74.0], [45.1, 74.0], [45.2, 74.0], [45.3, 74.0], [45.4, 74.0], [45.5, 74.0], [45.6, 74.0], [45.7, 74.0], [45.8, 74.0], [45.9, 74.0], [46.0, 74.0], [46.1, 74.0], [46.2, 74.0], [46.3, 74.0], [46.4, 74.0], [46.5, 74.0], [46.6, 74.0], [46.7, 74.0], [46.8, 74.0], [46.9, 74.0], [47.0, 74.0], [47.1, 74.0], [47.2, 75.0], [47.3, 75.0], [47.4, 75.0], [47.5, 75.0], [47.6, 75.0], [47.7, 75.0], [47.8, 75.0], [47.9, 75.0], [48.0, 75.0], [48.1, 75.0], [48.2, 75.0], [48.3, 75.0], [48.4, 75.0], [48.5, 75.0], [48.6, 75.0], [48.7, 75.0], [48.8, 75.0], [48.9, 75.0], [49.0, 75.0], [49.1, 75.0], [49.2, 75.0], [49.3, 75.0], [49.4, 75.0], [49.5, 75.0], [49.6, 75.0], [49.7, 75.0], [49.8, 75.0], [49.9, 75.0], [50.0, 75.0], [50.1, 75.0], [50.2, 75.0], [50.3, 75.0], [50.4, 76.0], [50.5, 76.0], [50.6, 76.0], [50.7, 76.0], [50.8, 76.0], [50.9, 76.0], [51.0, 76.0], [51.1, 76.0], [51.2, 76.0], [51.3, 76.0], [51.4, 76.0], [51.5, 76.0], [51.6, 76.0], [51.7, 76.0], [51.8, 76.0], [51.9, 76.0], [52.0, 76.0], [52.1, 76.0], [52.2, 76.0], [52.3, 76.0], [52.4, 76.0], [52.5, 76.0], [52.6, 76.0], [52.7, 76.0], [52.8, 76.0], [52.9, 76.0], [53.0, 76.0], [53.1, 76.0], [53.2, 76.0], [53.3, 77.0], [53.4, 77.0], [53.5, 77.0], [53.6, 77.0], [53.7, 77.0], [53.8, 77.0], [53.9, 77.0], [54.0, 77.0], [54.1, 77.0], [54.2, 77.0], [54.3, 77.0], [54.4, 77.0], [54.5, 77.0], [54.6, 77.0], [54.7, 77.0], [54.8, 77.0], [54.9, 77.0], [55.0, 77.0], [55.1, 77.0], [55.2, 77.0], [55.3, 77.0], [55.4, 77.0], [55.5, 77.0], [55.6, 77.0], [55.7, 77.0], [55.8, 77.0], [55.9, 77.0], [56.0, 78.0], [56.1, 78.0], [56.2, 78.0], [56.3, 78.0], [56.4, 78.0], [56.5, 78.0], [56.6, 78.0], [56.7, 78.0], [56.8, 78.0], [56.9, 78.0], [57.0, 78.0], [57.1, 78.0], [57.2, 78.0], [57.3, 78.0], [57.4, 78.0], [57.5, 78.0], [57.6, 78.0], [57.7, 78.0], [57.8, 78.0], [57.9, 78.0], [58.0, 78.0], [58.1, 78.0], [58.2, 78.0], [58.3, 78.0], [58.4, 78.0], [58.5, 78.0], [58.6, 79.0], [58.7, 79.0], [58.8, 79.0], [58.9, 79.0], [59.0, 79.0], [59.1, 79.0], [59.2, 79.0], [59.3, 79.0], [59.4, 79.0], [59.5, 79.0], [59.6, 79.0], [59.7, 79.0], [59.8, 79.0], [59.9, 79.0], [60.0, 79.0], [60.1, 79.0], [60.2, 79.0], [60.3, 79.0], [60.4, 79.0], [60.5, 79.0], [60.6, 79.0], [60.7, 79.0], [60.8, 79.0], [60.9, 79.0], [61.0, 80.0], [61.1, 80.0], [61.2, 80.0], [61.3, 80.0], [61.4, 80.0], [61.5, 80.0], [61.6, 80.0], [61.7, 80.0], [61.8, 80.0], [61.9, 80.0], [62.0, 80.0], [62.1, 80.0], [62.2, 80.0], [62.3, 80.0], [62.4, 80.0], [62.5, 80.0], [62.6, 80.0], [62.7, 80.0], [62.8, 80.0], [62.9, 80.0], [63.0, 80.0], [63.1, 80.0], [63.2, 81.0], [63.3, 81.0], [63.4, 81.0], [63.5, 81.0], [63.6, 81.0], [63.7, 81.0], [63.8, 81.0], [63.9, 81.0], [64.0, 81.0], [64.1, 81.0], [64.2, 81.0], [64.3, 81.0], [64.4, 81.0], [64.5, 81.0], [64.6, 81.0], [64.7, 81.0], [64.8, 81.0], [64.9, 81.0], [65.0, 81.0], [65.1, 81.0], [65.2, 81.0], [65.3, 81.0], [65.4, 81.0], [65.5, 82.0], [65.6, 82.0], [65.7, 82.0], [65.8, 82.0], [65.9, 82.0], [66.0, 82.0], [66.1, 82.0], [66.2, 82.0], [66.3, 82.0], [66.4, 82.0], [66.5, 82.0], [66.6, 82.0], [66.7, 82.0], [66.8, 82.0], [66.9, 82.0], [67.0, 82.0], [67.1, 82.0], [67.2, 82.0], [67.3, 82.0], [67.4, 82.0], [67.5, 82.0], [67.6, 83.0], [67.7, 83.0], [67.8, 83.0], [67.9, 83.0], [68.0, 83.0], [68.1, 83.0], [68.2, 83.0], [68.3, 83.0], [68.4, 83.0], [68.5, 83.0], [68.6, 83.0], [68.7, 83.0], [68.8, 83.0], [68.9, 83.0], [69.0, 83.0], [69.1, 83.0], [69.2, 83.0], [69.3, 83.0], [69.4, 83.0], [69.5, 83.0], [69.6, 83.0], [69.7, 84.0], [69.8, 84.0], [69.9, 84.0], [70.0, 84.0], [70.1, 84.0], [70.2, 84.0], [70.3, 84.0], [70.4, 84.0], [70.5, 84.0], [70.6, 84.0], [70.7, 84.0], [70.8, 84.0], [70.9, 84.0], [71.0, 84.0], [71.1, 84.0], [71.2, 84.0], [71.3, 84.0], [71.4, 84.0], [71.5, 84.0], [71.6, 85.0], [71.7, 85.0], [71.8, 85.0], [71.9, 85.0], [72.0, 85.0], [72.1, 85.0], [72.2, 85.0], [72.3, 85.0], [72.4, 85.0], [72.5, 85.0], [72.6, 85.0], [72.7, 85.0], [72.8, 85.0], [72.9, 85.0], [73.0, 85.0], [73.1, 85.0], [73.2, 85.0], [73.3, 85.0], [73.4, 85.0], [73.5, 86.0], [73.6, 86.0], [73.7, 86.0], [73.8, 86.0], [73.9, 86.0], [74.0, 86.0], [74.1, 86.0], [74.2, 86.0], [74.3, 86.0], [74.4, 86.0], [74.5, 86.0], [74.6, 86.0], [74.7, 86.0], [74.8, 86.0], [74.9, 86.0], [75.0, 86.0], [75.1, 86.0], [75.2, 87.0], [75.3, 87.0], [75.4, 87.0], [75.5, 87.0], [75.6, 87.0], [75.7, 87.0], [75.8, 87.0], [75.9, 87.0], [76.0, 87.0], [76.1, 87.0], [76.2, 87.0], [76.3, 87.0], [76.4, 87.0], [76.5, 87.0], [76.6, 87.0], [76.7, 87.0], [76.8, 88.0], [76.9, 88.0], [77.0, 88.0], [77.1, 88.0], [77.2, 88.0], [77.3, 88.0], [77.4, 88.0], [77.5, 88.0], [77.6, 88.0], [77.7, 88.0], [77.8, 88.0], [77.9, 88.0], [78.0, 88.0], [78.1, 88.0], [78.2, 89.0], [78.3, 89.0], [78.4, 89.0], [78.5, 89.0], [78.6, 89.0], [78.7, 89.0], [78.8, 89.0], [78.9, 89.0], [79.0, 89.0], [79.1, 89.0], [79.2, 89.0], [79.3, 89.0], [79.4, 89.0], [79.5, 89.0], [79.6, 90.0], [79.7, 90.0], [79.8, 90.0], [79.9, 90.0], [80.0, 90.0], [80.1, 90.0], [80.2, 90.0], [80.3, 90.0], [80.4, 90.0], [80.5, 90.0], [80.6, 90.0], [80.7, 90.0], [80.8, 91.0], [80.9, 91.0], [81.0, 91.0], [81.1, 91.0], [81.2, 91.0], [81.3, 91.0], [81.4, 91.0], [81.5, 91.0], [81.6, 91.0], [81.7, 91.0], [81.8, 91.0], [81.9, 91.0], [82.0, 92.0], [82.1, 92.0], [82.2, 92.0], [82.3, 92.0], [82.4, 92.0], [82.5, 92.0], [82.6, 92.0], [82.7, 92.0], [82.8, 92.0], [82.9, 92.0], [83.0, 92.0], [83.1, 92.0], [83.2, 93.0], [83.3, 93.0], [83.4, 93.0], [83.5, 93.0], [83.6, 93.0], [83.7, 93.0], [83.8, 93.0], [83.9, 93.0], [84.0, 93.0], [84.1, 93.0], [84.2, 94.0], [84.3, 94.0], [84.4, 94.0], [84.5, 94.0], [84.6, 94.0], [84.7, 94.0], [84.8, 94.0], [84.9, 94.0], [85.0, 94.0], [85.1, 95.0], [85.2, 95.0], [85.3, 95.0], [85.4, 95.0], [85.5, 95.0], [85.6, 95.0], [85.7, 95.0], [85.8, 95.0], [85.9, 95.0], [86.0, 96.0], [86.1, 96.0], [86.2, 96.0], [86.3, 96.0], [86.4, 96.0], [86.5, 96.0], [86.6, 96.0], [86.7, 96.0], [86.8, 96.0], [86.9, 97.0], [87.0, 97.0], [87.1, 97.0], [87.2, 97.0], [87.3, 97.0], [87.4, 97.0], [87.5, 97.0], [87.6, 98.0], [87.7, 98.0], [87.8, 98.0], [87.9, 98.0], [88.0, 98.0], [88.1, 98.0], [88.2, 98.0], [88.3, 99.0], [88.4, 99.0], [88.5, 99.0], [88.6, 99.0], [88.7, 99.0], [88.8, 99.0], [88.9, 99.0], [89.0, 100.0], [89.1, 100.0], [89.2, 100.0], [89.3, 100.0], [89.4, 100.0], [89.5, 100.0], [89.6, 100.0], [89.7, 101.0], [89.8, 101.0], [89.9, 101.0], [90.0, 101.0], [90.1, 101.0], [90.2, 101.0], [90.3, 102.0], [90.4, 102.0], [90.5, 102.0], [90.6, 102.0], [90.7, 102.0], [90.8, 103.0], [90.9, 103.0], [91.0, 103.0], [91.1, 103.0], [91.2, 103.0], [91.3, 103.0], [91.4, 104.0], [91.5, 104.0], [91.6, 104.0], [91.7, 104.0], [91.8, 104.0], [91.9, 105.0], [92.0, 105.0], [92.1, 105.0], [92.2, 105.0], [92.3, 106.0], [92.4, 106.0], [92.5, 106.0], [92.6, 106.0], [92.7, 107.0], [92.8, 107.0], [92.9, 107.0], [93.0, 107.0], [93.1, 107.0], [93.2, 108.0], [93.3, 108.0], [93.4, 108.0], [93.5, 109.0], [93.6, 109.0], [93.7, 109.0], [93.8, 109.0], [93.9, 110.0], [94.0, 110.0], [94.1, 110.0], [94.2, 111.0], [94.3, 111.0], [94.4, 111.0], [94.5, 112.0], [94.6, 112.0], [94.7, 112.0], [94.8, 113.0], [94.9, 113.0], [95.0, 113.0], [95.1, 114.0], [95.2, 114.0], [95.3, 115.0], [95.4, 115.0], [95.5, 115.0], [95.6, 116.0], [95.7, 116.0], [95.8, 117.0], [95.9, 117.0], [96.0, 118.0], [96.1, 118.0], [96.2, 119.0], [96.3, 119.0], [96.4, 120.0], [96.5, 120.0], [96.6, 121.0], [96.7, 121.0], [96.8, 122.0], [96.9, 123.0], [97.0, 123.0], [97.1, 124.0], [97.2, 125.0], [97.3, 125.0], [97.4, 126.0], [97.5, 127.0], [97.6, 128.0], [97.7, 129.0], [97.8, 130.0], [97.9, 131.0], [98.0, 132.0], [98.1, 133.0], [98.2, 134.0], [98.3, 135.0], [98.4, 137.0], [98.5, 138.0], [98.6, 140.0], [98.7, 142.0], [98.8, 144.0], [98.9, 146.0], [99.0, 148.0], [99.1, 151.0], [99.2, 154.0], [99.3, 158.0], [99.4, 162.0], [99.5, 167.0], [99.6, 174.0], [99.7, 183.0], [99.8, 199.0], [99.9, 231.0], [100.0, 754.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 167058.0, "series": [{"data": [[0.0, 167058.0], [600.0, 18.0], [300.0, 25.0], [700.0, 32.0], [100.0, 20323.0], [200.0, 297.0], [400.0, 1.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 187704.0, "series": [{"data": [[0.0, 187704.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.69591527987898, "minX": 1.58306016E12, "maxY": 50.0, "series": [{"data": [[1.58306028E12, 50.0], [1.5830604E12, 50.0], [1.58306046E12, 49.69591527987898], [1.58306022E12, 50.0], [1.58306016E12, 50.0], [1.58306034E12, 50.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306046E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 54.0, "minX": 2.0, "maxY": 88.5, "series": [{"data": [[32.0, 76.75], [2.0, 70.0], [35.0, 83.33333333333333], [37.0, 77.0], [36.0, 74.0], [41.0, 74.75], [45.0, 88.5], [44.0, 80.33333333333333], [46.0, 86.66666666666667], [48.0, 73.5], [3.0, 54.0], [50.0, 79.71441281612864], [5.0, 72.0], [6.0, 58.0], [7.0, 60.0], [8.0, 80.0], [10.0, 75.0], [12.0, 62.0], [15.0, 74.33333333333333], [16.0, 65.0], [19.0, 73.0], [20.0, 67.0], [22.0, 74.33333333333333], [23.0, 69.0], [24.0, 81.0], [26.0, 75.5], [28.0, 76.0]], "isOverall": false, "label": "API call", "isController": false}, {"data": [[49.99357670142844, 79.7130340765052]], "isOverall": false, "label": "API call-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 21548.6, "minX": 1.58306016E12, "maxY": 2.8017348833333332E7, "series": [{"data": [[1.58306028E12, 2.7564410833333332E7], [1.5830604E12, 2.7723224E7], [1.58306046E12, 2824453.0], [1.58306022E12, 2.78962805E7], [1.58306016E12, 1.9686423166666668E7], [1.58306034E12, 2.8017348833333332E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58306028E12, 210297.16666666666], [1.5830604E12, 211508.8], [1.58306046E12, 21548.6], [1.58306022E12, 212829.1], [1.58306016E12, 150193.63333333333], [1.58306034E12, 213752.76666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306046E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 76.09933656999105, "minX": 1.58306016E12, "maxY": 96.65915421625796, "series": [{"data": [[1.58306028E12, 77.35948843818592], [1.5830604E12, 76.92021167283127], [1.58306046E12, 80.29198184568844], [1.58306022E12, 76.42595287329888], [1.58306016E12, 96.65915421625796], [1.58306034E12, 76.09933656999105]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306046E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 74.74660023893662, "minX": 1.58306016E12, "maxY": 95.19433491299766, "series": [{"data": [[1.58306028E12, 76.01738793437538], [1.5830604E12, 75.56866522811376], [1.58306046E12, 78.89510842158346], [1.58306022E12, 75.09762324168499], [1.58306016E12, 95.19433491299766], [1.58306034E12, 74.74660023893662]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306046E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03729963008631319, "minX": 1.58306016E12, "maxY": 0.11532756936656641, "series": [{"data": [[1.58306028E12, 0.041725875209921125], [1.5830604E12, 0.03729963008631319], [1.58306046E12, 0.046898638426626275], [1.58306022E12, 0.04181665007275759], [1.58306016E12, 0.11532756936656641], [1.58306034E12, 0.04013624463028411]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306046E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.58306016E12, "maxY": 754.0, "series": [{"data": [[1.58306028E12, 218.0], [1.5830604E12, 215.0], [1.58306046E12, 197.0], [1.58306022E12, 213.0], [1.58306016E12, 754.0], [1.58306034E12, 208.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58306028E12, 21.0], [1.5830604E12, 22.0], [1.58306046E12, 34.0], [1.58306022E12, 21.0], [1.58306016E12, 21.0], [1.58306034E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58306028E12, 94.0], [1.5830604E12, 96.0], [1.58306046E12, 104.0], [1.58306022E12, 93.0], [1.58306016E12, 118.0], [1.58306034E12, 93.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58306028E12, 116.9900000000016], [1.5830604E12, 122.9900000000016], [1.58306046E12, 136.0], [1.58306022E12, 114.0], [1.58306016E12, 171.0], [1.58306034E12, 115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58306028E12, 101.0], [1.5830604E12, 104.0], [1.58306046E12, 113.0], [1.58306022E12, 99.0], [1.58306016E12, 133.0], [1.58306034E12, 100.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 72.0, "minX": 218.0, "maxY": 252.5, "series": [{"data": [[218.0, 252.5], [255.0, 72.0], [277.0, 178.0], [326.0, 156.0], [373.0, 132.0], [381.0, 117.0], [397.0, 124.0], [387.0, 123.0], [411.0, 118.0], [414.0, 119.5], [423.0, 115.0], [429.0, 113.0], [420.0, 118.0], [430.0, 107.0], [419.0, 119.0], [428.0, 114.0], [441.0, 109.0], [434.0, 112.0], [435.0, 117.0], [446.0, 110.0], [438.0, 111.0], [460.0, 107.0], [461.0, 103.0], [467.0, 104.0], [475.0, 104.0], [477.0, 102.0], [488.0, 99.0], [494.0, 96.0], [492.0, 99.0], [483.0, 101.0], [499.0, 98.0], [508.0, 95.0], [502.0, 95.5], [506.0, 96.0], [514.0, 92.0], [517.0, 92.0], [555.0, 89.0], [567.0, 84.0], [566.0, 85.0], [602.0, 81.0], [604.0, 80.0], [601.0, 80.0], [606.0, 79.0], [589.0, 84.0], [581.0, 85.0], [585.0, 84.0], [603.0, 79.0], [595.0, 81.0], [594.0, 81.0], [614.0, 80.0], [639.0, 76.0], [629.0, 78.0], [626.0, 78.0], [637.0, 75.0], [636.0, 77.0], [638.0, 76.0], [635.0, 77.0], [633.0, 76.0], [634.0, 76.0], [618.0, 80.0], [621.0, 78.0], [617.0, 80.0], [632.0, 77.0], [613.0, 79.0], [609.0, 80.0], [612.0, 79.0], [610.0, 80.0], [667.0, 73.0], [658.0, 74.0], [661.0, 73.0], [660.0, 73.0], [659.0, 74.0], [649.0, 75.0], [650.0, 75.0], [648.0, 75.0], [651.0, 75.0], [652.0, 74.0], [653.0, 74.0], [662.0, 73.0], [664.0, 73.0], [663.0, 73.0], [670.0, 73.0], [657.0, 74.0], [656.0, 74.0], [671.0, 73.0], [669.0, 73.0], [668.0, 73.0], [665.0, 73.0], [666.0, 73.0], [654.0, 74.0], [640.0, 75.0], [655.0, 74.0], [647.0, 75.0], [643.0, 75.5], [644.0, 75.0], [646.0, 75.0], [642.0, 75.0], [677.0, 73.0], [673.0, 72.0], [675.0, 72.0], [678.0, 73.0], [672.0, 73.0], [676.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 678.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 70.0, "minX": 218.0, "maxY": 243.5, "series": [{"data": [[218.0, 243.5], [255.0, 70.0], [277.0, 176.0], [326.0, 154.0], [373.0, 131.0], [381.0, 116.0], [397.0, 123.0], [387.0, 122.0], [411.0, 117.0], [414.0, 118.0], [423.0, 113.0], [429.0, 111.0], [420.0, 117.0], [430.0, 106.0], [419.0, 118.0], [428.0, 113.0], [441.0, 108.0], [434.0, 110.0], [435.0, 115.0], [446.0, 109.0], [438.0, 109.0], [460.0, 106.0], [461.0, 102.0], [467.0, 102.5], [475.0, 103.0], [477.0, 100.0], [488.0, 97.0], [494.0, 94.0], [492.0, 97.0], [483.0, 100.0], [499.0, 97.0], [508.0, 94.0], [502.0, 94.0], [506.0, 94.0], [514.0, 91.0], [517.0, 90.0], [555.0, 87.0], [567.0, 82.0], [566.0, 84.0], [602.0, 79.0], [604.0, 79.0], [601.0, 79.0], [606.0, 78.0], [589.0, 82.0], [581.0, 84.0], [585.0, 83.0], [603.0, 77.0], [595.0, 80.0], [594.0, 79.0], [614.0, 78.0], [639.0, 75.0], [629.0, 76.0], [626.0, 76.0], [637.0, 74.0], [636.0, 76.0], [638.0, 75.0], [635.0, 76.0], [633.0, 75.0], [634.0, 75.0], [618.0, 78.0], [621.0, 76.0], [617.0, 78.0], [632.0, 76.0], [613.0, 77.0], [609.0, 79.0], [612.0, 78.0], [610.0, 78.0], [667.0, 72.0], [658.0, 73.0], [661.0, 72.0], [660.0, 72.0], [659.0, 72.0], [649.0, 74.0], [650.0, 73.0], [648.0, 73.0], [651.0, 73.0], [652.0, 73.0], [653.0, 73.0], [662.0, 72.0], [664.0, 72.0], [663.0, 72.0], [670.0, 71.0], [657.0, 73.0], [656.0, 72.0], [671.0, 71.0], [669.0, 72.0], [668.0, 71.0], [665.0, 72.0], [666.0, 72.0], [654.0, 73.0], [640.0, 74.0], [655.0, 73.0], [647.0, 73.0], [643.0, 74.0], [644.0, 74.0], [646.0, 73.0], [642.0, 73.0], [677.0, 71.0], [673.0, 71.0], [675.0, 71.0], [678.0, 71.0], [672.0, 71.0], [676.0, 71.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 678.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 65.26666666666667, "minX": 1.58306016E12, "maxY": 655.6833333333333, "series": [{"data": [[1.58306028E12, 645.0833333333334], [1.5830604E12, 648.8], [1.58306046E12, 65.26666666666667], [1.58306022E12, 652.85], [1.58306016E12, 461.55], [1.58306034E12, 655.6833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306046E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 66.1, "minX": 1.58306016E12, "maxY": 655.6833333333333, "series": [{"data": [[1.58306028E12, 645.0833333333334], [1.5830604E12, 648.8], [1.58306046E12, 66.1], [1.58306022E12, 652.85], [1.58306016E12, 460.71666666666664], [1.58306034E12, 655.6833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58306046E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 66.1, "minX": 1.58306016E12, "maxY": 655.6833333333333, "series": [{"data": [[1.58306028E12, 645.0833333333334], [1.5830604E12, 648.8], [1.58306046E12, 66.1], [1.58306022E12, 652.85], [1.58306016E12, 460.71666666666664], [1.58306034E12, 655.6833333333333]], "isOverall": false, "label": "API call-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306046E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 66.1, "minX": 1.58306016E12, "maxY": 655.6833333333333, "series": [{"data": [[1.58306028E12, 645.0833333333334], [1.5830604E12, 648.8], [1.58306046E12, 66.1], [1.58306022E12, 652.85], [1.58306016E12, 460.71666666666664], [1.58306034E12, 655.6833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58306046E12, "title": "Total Transactions Per Second"}},
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

