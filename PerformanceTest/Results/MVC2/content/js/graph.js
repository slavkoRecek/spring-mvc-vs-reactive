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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 669.0, "series": [{"data": [[0.0, 7.0], [0.1, 9.0], [0.2, 10.0], [0.3, 11.0], [0.4, 11.0], [0.5, 12.0], [0.6, 13.0], [0.7, 13.0], [0.8, 14.0], [0.9, 15.0], [1.0, 15.0], [1.1, 16.0], [1.2, 17.0], [1.3, 17.0], [1.4, 18.0], [1.5, 18.0], [1.6, 19.0], [1.7, 20.0], [1.8, 20.0], [1.9, 21.0], [2.0, 22.0], [2.1, 22.0], [2.2, 23.0], [2.3, 23.0], [2.4, 24.0], [2.5, 24.0], [2.6, 25.0], [2.7, 25.0], [2.8, 26.0], [2.9, 26.0], [3.0, 27.0], [3.1, 27.0], [3.2, 28.0], [3.3, 28.0], [3.4, 29.0], [3.5, 29.0], [3.6, 30.0], [3.7, 30.0], [3.8, 31.0], [3.9, 31.0], [4.0, 32.0], [4.1, 32.0], [4.2, 32.0], [4.3, 33.0], [4.4, 33.0], [4.5, 34.0], [4.6, 34.0], [4.7, 34.0], [4.8, 35.0], [4.9, 35.0], [5.0, 35.0], [5.1, 36.0], [5.2, 36.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 39.0], [6.1, 39.0], [6.2, 39.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 43.0], [7.4, 43.0], [7.5, 43.0], [7.6, 43.0], [7.7, 44.0], [7.8, 44.0], [7.9, 44.0], [8.0, 44.0], [8.1, 45.0], [8.2, 45.0], [8.3, 45.0], [8.4, 45.0], [8.5, 46.0], [8.6, 46.0], [8.7, 46.0], [8.8, 46.0], [8.9, 47.0], [9.0, 47.0], [9.1, 47.0], [9.2, 47.0], [9.3, 48.0], [9.4, 48.0], [9.5, 48.0], [9.6, 48.0], [9.7, 48.0], [9.8, 49.0], [9.9, 49.0], [10.0, 49.0], [10.1, 49.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 52.0], [11.3, 52.0], [11.4, 52.0], [11.5, 52.0], [11.6, 52.0], [11.7, 53.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 54.0], [12.4, 54.0], [12.5, 54.0], [12.6, 54.0], [12.7, 54.0], [12.8, 54.0], [12.9, 55.0], [13.0, 55.0], [13.1, 55.0], [13.2, 55.0], [13.3, 55.0], [13.4, 55.0], [13.5, 56.0], [13.6, 56.0], [13.7, 56.0], [13.8, 56.0], [13.9, 56.0], [14.0, 56.0], [14.1, 57.0], [14.2, 57.0], [14.3, 57.0], [14.4, 57.0], [14.5, 57.0], [14.6, 57.0], [14.7, 58.0], [14.8, 58.0], [14.9, 58.0], [15.0, 58.0], [15.1, 58.0], [15.2, 58.0], [15.3, 58.0], [15.4, 59.0], [15.5, 59.0], [15.6, 59.0], [15.7, 59.0], [15.8, 59.0], [15.9, 59.0], [16.0, 60.0], [16.1, 60.0], [16.2, 60.0], [16.3, 60.0], [16.4, 60.0], [16.5, 60.0], [16.6, 60.0], [16.7, 61.0], [16.8, 61.0], [16.9, 61.0], [17.0, 61.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 62.0], [17.6, 62.0], [17.7, 62.0], [17.8, 62.0], [17.9, 62.0], [18.0, 62.0], [18.1, 62.0], [18.2, 63.0], [18.3, 63.0], [18.4, 63.0], [18.5, 63.0], [18.6, 63.0], [18.7, 63.0], [18.8, 63.0], [18.9, 63.0], [19.0, 64.0], [19.1, 64.0], [19.2, 64.0], [19.3, 64.0], [19.4, 64.0], [19.5, 64.0], [19.6, 64.0], [19.7, 64.0], [19.8, 65.0], [19.9, 65.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 65.0], [20.4, 65.0], [20.5, 65.0], [20.6, 66.0], [20.7, 66.0], [20.8, 66.0], [20.9, 66.0], [21.0, 66.0], [21.1, 66.0], [21.2, 66.0], [21.3, 66.0], [21.4, 66.0], [21.5, 67.0], [21.6, 67.0], [21.7, 67.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 67.0], [22.3, 68.0], [22.4, 68.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 70.0], [24.2, 70.0], [24.3, 70.0], [24.4, 70.0], [24.5, 70.0], [24.6, 70.0], [24.7, 70.0], [24.8, 70.0], [24.9, 70.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 71.0], [25.4, 71.0], [25.5, 71.0], [25.6, 71.0], [25.7, 71.0], [25.8, 71.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 73.0], [27.7, 73.0], [27.8, 73.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 74.0], [28.8, 74.0], [28.9, 75.0], [29.0, 75.0], [29.1, 75.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 75.0], [29.7, 75.0], [29.8, 75.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 77.0], [31.0, 77.0], [31.1, 77.0], [31.2, 77.0], [31.3, 77.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 78.0], [32.1, 78.0], [32.2, 78.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 79.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 79.0], [34.0, 79.0], [34.1, 79.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 80.0], [34.6, 80.0], [34.7, 80.0], [34.8, 80.0], [34.9, 80.0], [35.0, 80.0], [35.1, 80.0], [35.2, 80.0], [35.3, 81.0], [35.4, 81.0], [35.5, 81.0], [35.6, 81.0], [35.7, 81.0], [35.8, 81.0], [35.9, 81.0], [36.0, 81.0], [36.1, 81.0], [36.2, 81.0], [36.3, 81.0], [36.4, 82.0], [36.5, 82.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 82.0], [37.2, 82.0], [37.3, 82.0], [37.4, 82.0], [37.5, 82.0], [37.6, 83.0], [37.7, 83.0], [37.8, 83.0], [37.9, 83.0], [38.0, 83.0], [38.1, 83.0], [38.2, 83.0], [38.3, 83.0], [38.4, 83.0], [38.5, 83.0], [38.6, 83.0], [38.7, 83.0], [38.8, 84.0], [38.9, 84.0], [39.0, 84.0], [39.1, 84.0], [39.2, 84.0], [39.3, 84.0], [39.4, 84.0], [39.5, 84.0], [39.6, 84.0], [39.7, 84.0], [39.8, 84.0], [39.9, 85.0], [40.0, 85.0], [40.1, 85.0], [40.2, 85.0], [40.3, 85.0], [40.4, 85.0], [40.5, 85.0], [40.6, 85.0], [40.7, 85.0], [40.8, 85.0], [40.9, 85.0], [41.0, 85.0], [41.1, 86.0], [41.2, 86.0], [41.3, 86.0], [41.4, 86.0], [41.5, 86.0], [41.6, 86.0], [41.7, 86.0], [41.8, 86.0], [41.9, 86.0], [42.0, 86.0], [42.1, 86.0], [42.2, 86.0], [42.3, 87.0], [42.4, 87.0], [42.5, 87.0], [42.6, 87.0], [42.7, 87.0], [42.8, 87.0], [42.9, 87.0], [43.0, 87.0], [43.1, 87.0], [43.2, 87.0], [43.3, 87.0], [43.4, 88.0], [43.5, 88.0], [43.6, 88.0], [43.7, 88.0], [43.8, 88.0], [43.9, 88.0], [44.0, 88.0], [44.1, 88.0], [44.2, 88.0], [44.3, 88.0], [44.4, 88.0], [44.5, 88.0], [44.6, 89.0], [44.7, 89.0], [44.8, 89.0], [44.9, 89.0], [45.0, 89.0], [45.1, 89.0], [45.2, 89.0], [45.3, 89.0], [45.4, 89.0], [45.5, 89.0], [45.6, 89.0], [45.7, 90.0], [45.8, 90.0], [45.9, 90.0], [46.0, 90.0], [46.1, 90.0], [46.2, 90.0], [46.3, 90.0], [46.4, 90.0], [46.5, 90.0], [46.6, 90.0], [46.7, 90.0], [46.8, 90.0], [46.9, 91.0], [47.0, 91.0], [47.1, 91.0], [47.2, 91.0], [47.3, 91.0], [47.4, 91.0], [47.5, 91.0], [47.6, 91.0], [47.7, 91.0], [47.8, 91.0], [47.9, 91.0], [48.0, 91.0], [48.1, 92.0], [48.2, 92.0], [48.3, 92.0], [48.4, 92.0], [48.5, 92.0], [48.6, 92.0], [48.7, 92.0], [48.8, 92.0], [48.9, 92.0], [49.0, 92.0], [49.1, 92.0], [49.2, 93.0], [49.3, 93.0], [49.4, 93.0], [49.5, 93.0], [49.6, 93.0], [49.7, 93.0], [49.8, 93.0], [49.9, 93.0], [50.0, 93.0], [50.1, 93.0], [50.2, 93.0], [50.3, 94.0], [50.4, 94.0], [50.5, 94.0], [50.6, 94.0], [50.7, 94.0], [50.8, 94.0], [50.9, 94.0], [51.0, 94.0], [51.1, 94.0], [51.2, 94.0], [51.3, 94.0], [51.4, 95.0], [51.5, 95.0], [51.6, 95.0], [51.7, 95.0], [51.8, 95.0], [51.9, 95.0], [52.0, 95.0], [52.1, 95.0], [52.2, 95.0], [52.3, 95.0], [52.4, 95.0], [52.5, 95.0], [52.6, 96.0], [52.7, 96.0], [52.8, 96.0], [52.9, 96.0], [53.0, 96.0], [53.1, 96.0], [53.2, 96.0], [53.3, 96.0], [53.4, 96.0], [53.5, 96.0], [53.6, 96.0], [53.7, 97.0], [53.8, 97.0], [53.9, 97.0], [54.0, 97.0], [54.1, 97.0], [54.2, 97.0], [54.3, 97.0], [54.4, 97.0], [54.5, 97.0], [54.6, 97.0], [54.7, 97.0], [54.8, 98.0], [54.9, 98.0], [55.0, 98.0], [55.1, 98.0], [55.2, 98.0], [55.3, 98.0], [55.4, 98.0], [55.5, 98.0], [55.6, 98.0], [55.7, 98.0], [55.8, 98.0], [55.9, 99.0], [56.0, 99.0], [56.1, 99.0], [56.2, 99.0], [56.3, 99.0], [56.4, 99.0], [56.5, 99.0], [56.6, 99.0], [56.7, 99.0], [56.8, 99.0], [56.9, 99.0], [57.0, 100.0], [57.1, 100.0], [57.2, 100.0], [57.3, 100.0], [57.4, 100.0], [57.5, 100.0], [57.6, 100.0], [57.7, 100.0], [57.8, 100.0], [57.9, 100.0], [58.0, 101.0], [58.1, 101.0], [58.2, 101.0], [58.3, 101.0], [58.4, 101.0], [58.5, 101.0], [58.6, 101.0], [58.7, 101.0], [58.8, 101.0], [58.9, 101.0], [59.0, 101.0], [59.1, 102.0], [59.2, 102.0], [59.3, 102.0], [59.4, 102.0], [59.5, 102.0], [59.6, 102.0], [59.7, 102.0], [59.8, 102.0], [59.9, 102.0], [60.0, 102.0], [60.1, 103.0], [60.2, 103.0], [60.3, 103.0], [60.4, 103.0], [60.5, 103.0], [60.6, 103.0], [60.7, 103.0], [60.8, 103.0], [60.9, 103.0], [61.0, 103.0], [61.1, 104.0], [61.2, 104.0], [61.3, 104.0], [61.4, 104.0], [61.5, 104.0], [61.6, 104.0], [61.7, 104.0], [61.8, 104.0], [61.9, 104.0], [62.0, 104.0], [62.1, 105.0], [62.2, 105.0], [62.3, 105.0], [62.4, 105.0], [62.5, 105.0], [62.6, 105.0], [62.7, 105.0], [62.8, 105.0], [62.9, 105.0], [63.0, 105.0], [63.1, 106.0], [63.2, 106.0], [63.3, 106.0], [63.4, 106.0], [63.5, 106.0], [63.6, 106.0], [63.7, 106.0], [63.8, 106.0], [63.9, 106.0], [64.0, 106.0], [64.1, 107.0], [64.2, 107.0], [64.3, 107.0], [64.4, 107.0], [64.5, 107.0], [64.6, 107.0], [64.7, 107.0], [64.8, 107.0], [64.9, 108.0], [65.0, 108.0], [65.1, 108.0], [65.2, 108.0], [65.3, 108.0], [65.4, 108.0], [65.5, 108.0], [65.6, 108.0], [65.7, 108.0], [65.8, 108.0], [65.9, 109.0], [66.0, 109.0], [66.1, 109.0], [66.2, 109.0], [66.3, 109.0], [66.4, 109.0], [66.5, 109.0], [66.6, 109.0], [66.7, 109.0], [66.8, 110.0], [66.9, 110.0], [67.0, 110.0], [67.1, 110.0], [67.2, 110.0], [67.3, 110.0], [67.4, 110.0], [67.5, 110.0], [67.6, 110.0], [67.7, 111.0], [67.8, 111.0], [67.9, 111.0], [68.0, 111.0], [68.1, 111.0], [68.2, 111.0], [68.3, 111.0], [68.4, 111.0], [68.5, 111.0], [68.6, 112.0], [68.7, 112.0], [68.8, 112.0], [68.9, 112.0], [69.0, 112.0], [69.1, 112.0], [69.2, 112.0], [69.3, 112.0], [69.4, 113.0], [69.5, 113.0], [69.6, 113.0], [69.7, 113.0], [69.8, 113.0], [69.9, 113.0], [70.0, 113.0], [70.1, 113.0], [70.2, 113.0], [70.3, 114.0], [70.4, 114.0], [70.5, 114.0], [70.6, 114.0], [70.7, 114.0], [70.8, 114.0], [70.9, 114.0], [71.0, 115.0], [71.1, 115.0], [71.2, 115.0], [71.3, 115.0], [71.4, 115.0], [71.5, 115.0], [71.6, 115.0], [71.7, 115.0], [71.8, 115.0], [71.9, 116.0], [72.0, 116.0], [72.1, 116.0], [72.2, 116.0], [72.3, 116.0], [72.4, 116.0], [72.5, 116.0], [72.6, 117.0], [72.7, 117.0], [72.8, 117.0], [72.9, 117.0], [73.0, 117.0], [73.1, 117.0], [73.2, 117.0], [73.3, 118.0], [73.4, 118.0], [73.5, 118.0], [73.6, 118.0], [73.7, 118.0], [73.8, 118.0], [73.9, 118.0], [74.0, 118.0], [74.1, 119.0], [74.2, 119.0], [74.3, 119.0], [74.4, 119.0], [74.5, 119.0], [74.6, 119.0], [74.7, 119.0], [74.8, 120.0], [74.9, 120.0], [75.0, 120.0], [75.1, 120.0], [75.2, 120.0], [75.3, 120.0], [75.4, 120.0], [75.5, 121.0], [75.6, 121.0], [75.7, 121.0], [75.8, 121.0], [75.9, 121.0], [76.0, 121.0], [76.1, 122.0], [76.2, 122.0], [76.3, 122.0], [76.4, 122.0], [76.5, 122.0], [76.6, 122.0], [76.7, 122.0], [76.8, 123.0], [76.9, 123.0], [77.0, 123.0], [77.1, 123.0], [77.2, 123.0], [77.3, 123.0], [77.4, 124.0], [77.5, 124.0], [77.6, 124.0], [77.7, 124.0], [77.8, 124.0], [77.9, 124.0], [78.0, 125.0], [78.1, 125.0], [78.2, 125.0], [78.3, 125.0], [78.4, 125.0], [78.5, 125.0], [78.6, 126.0], [78.7, 126.0], [78.8, 126.0], [78.9, 126.0], [79.0, 126.0], [79.1, 126.0], [79.2, 126.0], [79.3, 127.0], [79.4, 127.0], [79.5, 127.0], [79.6, 127.0], [79.7, 127.0], [79.8, 128.0], [79.9, 128.0], [80.0, 128.0], [80.1, 128.0], [80.2, 128.0], [80.3, 128.0], [80.4, 129.0], [80.5, 129.0], [80.6, 129.0], [80.7, 129.0], [80.8, 129.0], [80.9, 130.0], [81.0, 130.0], [81.1, 130.0], [81.2, 130.0], [81.3, 130.0], [81.4, 131.0], [81.5, 131.0], [81.6, 131.0], [81.7, 131.0], [81.8, 131.0], [81.9, 132.0], [82.0, 132.0], [82.1, 132.0], [82.2, 132.0], [82.3, 132.0], [82.4, 133.0], [82.5, 133.0], [82.6, 133.0], [82.7, 133.0], [82.8, 133.0], [82.9, 134.0], [83.0, 134.0], [83.1, 134.0], [83.2, 134.0], [83.3, 135.0], [83.4, 135.0], [83.5, 135.0], [83.6, 135.0], [83.7, 135.0], [83.8, 136.0], [83.9, 136.0], [84.0, 136.0], [84.1, 136.0], [84.2, 137.0], [84.3, 137.0], [84.4, 137.0], [84.5, 137.0], [84.6, 138.0], [84.7, 138.0], [84.8, 138.0], [84.9, 138.0], [85.0, 139.0], [85.1, 139.0], [85.2, 139.0], [85.3, 139.0], [85.4, 140.0], [85.5, 140.0], [85.6, 140.0], [85.7, 140.0], [85.8, 141.0], [85.9, 141.0], [86.0, 141.0], [86.1, 142.0], [86.2, 142.0], [86.3, 142.0], [86.4, 142.0], [86.5, 143.0], [86.6, 143.0], [86.7, 143.0], [86.8, 144.0], [86.9, 144.0], [87.0, 144.0], [87.1, 144.0], [87.2, 145.0], [87.3, 145.0], [87.4, 145.0], [87.5, 146.0], [87.6, 146.0], [87.7, 146.0], [87.8, 147.0], [87.9, 147.0], [88.0, 147.0], [88.1, 148.0], [88.2, 148.0], [88.3, 148.0], [88.4, 149.0], [88.5, 149.0], [88.6, 149.0], [88.7, 150.0], [88.8, 150.0], [88.9, 150.0], [89.0, 151.0], [89.1, 151.0], [89.2, 152.0], [89.3, 152.0], [89.4, 152.0], [89.5, 153.0], [89.6, 153.0], [89.7, 153.0], [89.8, 154.0], [89.9, 154.0], [90.0, 155.0], [90.1, 155.0], [90.2, 155.0], [90.3, 156.0], [90.4, 156.0], [90.5, 157.0], [90.6, 157.0], [90.7, 158.0], [90.8, 158.0], [90.9, 158.0], [91.0, 159.0], [91.1, 159.0], [91.2, 160.0], [91.3, 160.0], [91.4, 161.0], [91.5, 161.0], [91.6, 162.0], [91.7, 162.0], [91.8, 163.0], [91.9, 163.0], [92.0, 164.0], [92.1, 164.0], [92.2, 165.0], [92.3, 165.0], [92.4, 166.0], [92.5, 166.0], [92.6, 167.0], [92.7, 168.0], [92.8, 168.0], [92.9, 169.0], [93.0, 169.0], [93.1, 170.0], [93.2, 171.0], [93.3, 171.0], [93.4, 172.0], [93.5, 173.0], [93.6, 173.0], [93.7, 174.0], [93.8, 175.0], [93.9, 175.0], [94.0, 176.0], [94.1, 177.0], [94.2, 178.0], [94.3, 178.0], [94.4, 179.0], [94.5, 180.0], [94.6, 181.0], [94.7, 182.0], [94.8, 183.0], [94.9, 183.0], [95.0, 184.0], [95.1, 185.0], [95.2, 186.0], [95.3, 187.0], [95.4, 188.0], [95.5, 189.0], [95.6, 190.0], [95.7, 191.0], [95.8, 192.0], [95.9, 193.0], [96.0, 194.0], [96.1, 195.0], [96.2, 196.0], [96.3, 198.0], [96.4, 199.0], [96.5, 200.0], [96.6, 202.0], [96.7, 203.0], [96.8, 205.0], [96.9, 206.0], [97.0, 208.0], [97.1, 209.0], [97.2, 211.0], [97.3, 213.0], [97.4, 215.0], [97.5, 217.0], [97.6, 218.0], [97.7, 220.0], [97.8, 223.0], [97.9, 225.0], [98.0, 227.0], [98.1, 230.0], [98.2, 233.0], [98.3, 235.0], [98.4, 238.0], [98.5, 241.0], [98.6, 245.0], [98.7, 248.0], [98.8, 252.0], [98.9, 257.0], [99.0, 262.0], [99.1, 267.0], [99.2, 273.0], [99.3, 281.0], [99.4, 289.0], [99.5, 299.0], [99.6, 312.0], [99.7, 333.0], [99.8, 360.0], [99.9, 411.0], [100.0, 669.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 85529.0, "series": [{"data": [[0.0, 85529.0], [300.0, 565.0], [600.0, 7.0], [100.0, 59400.0], [200.0, 4600.0], [400.0, 139.0], [500.0, 37.0]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 44.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 150233.0, "series": [{"data": [[0.0, 150233.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 44.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.95745832431265, "minX": 1.58307384E12, "maxY": 50.0, "series": [{"data": [[1.5830739E12, 50.0], [1.58307402E12, 50.0], [1.58307384E12, 50.0], [1.58307414E12, 49.95745832431265], [1.58307396E12, 50.0], [1.58307408E12, 50.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307414E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 50.0, "minX": 5.0, "maxY": 124.0, "series": [{"data": [[33.0, 111.0], [37.0, 98.0], [39.0, 118.0], [38.0, 80.0], [43.0, 50.0], [42.0, 104.33333333333333], [45.0, 104.0], [47.0, 99.5], [46.0, 67.0], [49.0, 111.33333333333333], [48.0, 91.5], [50.0, 99.62909388646318], [5.0, 71.0], [6.0, 97.0], [9.0, 94.0], [10.0, 59.0], [12.0, 68.5], [13.0, 124.0], [15.0, 82.5], [18.0, 89.0], [20.0, 67.5], [22.0, 116.5], [26.0, 85.0], [27.0, 97.66666666666667], [28.0, 82.0], [30.0, 89.0]], "isOverall": false, "label": "API call", "isController": false}, {"data": [[49.992154488045415, 99.62712191486422]], "isOverall": false, "label": "API call-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3064.4, "minX": 1.58307384E12, "maxY": 2.3067078333333332E7, "series": [{"data": [[1.5830739E12, 2.0292477E7], [1.58307402E12, 2.3067078333333332E7], [1.58307384E12, 401662.0], [1.58307414E12, 1.9736987E7], [1.58307396E12, 2.08586495E7], [1.58307408E12, 2.2665416333333332E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5830739E12, 154817.4], [1.58307402E12, 175985.66666666666], [1.58307384E12, 3064.4], [1.58307414E12, 150579.4], [1.58307396E12, 159136.9], [1.58307408E12, 172921.26666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307414E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 92.50639086137672, "minX": 1.58307384E12, "maxY": 267.4202127659576, "series": [{"data": [[1.5830739E12, 105.12265740155829], [1.58307402E12, 92.50639086137672], [1.58307384E12, 267.4202127659576], [1.58307414E12, 102.45698924731234], [1.58307396E12, 102.22513571648025], [1.58307408E12, 94.12518066989247]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307414E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 91.3809509107743, "minX": 1.58307384E12, "maxY": 263.96808510638306, "series": [{"data": [[1.5830739E12, 103.98189092440421], [1.58307402E12, 91.3809509107743], [1.58307384E12, 263.96808510638306], [1.58307414E12, 101.28718337302409], [1.58307396E12, 101.0735429683496], [1.58307408E12, 92.98758876390384]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307414E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.044900395902721074, "minX": 1.58307384E12, "maxY": 2.792553191489368, "series": [{"data": [[1.5830739E12, 0.06766336772653836], [1.58307402E12, 0.046001852423587605], [1.58307384E12, 2.792553191489368], [1.58307414E12, 0.04820668254311886], [1.58307396E12, 0.053637884530028414], [1.58307408E12, 0.044900395902721074]], "isOverall": false, "label": "API call", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307414E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.58307384E12, "maxY": 669.0, "series": [{"data": [[1.5830739E12, 647.0], [1.58307402E12, 441.0], [1.58307384E12, 625.0], [1.58307414E12, 669.0], [1.58307396E12, 620.0], [1.58307408E12, 668.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5830739E12, 7.0], [1.58307402E12, 7.0], [1.58307384E12, 84.0], [1.58307414E12, 7.0], [1.58307396E12, 7.0], [1.58307408E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5830739E12, 140.0], [1.58307402E12, 133.0], [1.58307384E12, 379.5], [1.58307414E12, 162.0], [1.58307396E12, 162.0], [1.58307408E12, 145.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5830739E12, 227.0], [1.58307402E12, 202.0], [1.58307384E12, 543.0000000000005], [1.58307414E12, 254.0], [1.58307396E12, 268.0], [1.58307408E12, 236.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5830739E12, 164.0], [1.58307402E12, 153.0], [1.58307384E12, 451.0], [1.58307414E12, 189.0], [1.58307396E12, 191.95000000000073], [1.58307408E12, 171.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307414E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 79.0, "minX": 151.0, "maxY": 290.0, "series": [{"data": [[151.0, 290.0], [181.0, 282.0], [226.0, 209.5], [232.0, 222.5], [239.0, 201.0], [268.0, 177.0], [276.0, 143.0], [302.0, 164.0], [300.0, 154.5], [312.0, 149.5], [305.0, 136.0], [334.0, 134.5], [336.0, 137.0], [350.0, 139.0], [344.0, 146.0], [355.0, 122.0], [367.0, 131.0], [352.0, 146.0], [364.0, 126.5], [361.0, 128.0], [363.0, 127.0], [356.0, 132.0], [365.0, 125.0], [370.0, 126.0], [369.0, 127.0], [373.0, 118.0], [368.0, 112.0], [391.0, 108.0], [390.0, 116.5], [394.0, 119.5], [404.0, 114.0], [413.0, 103.0], [401.0, 113.0], [415.0, 117.0], [430.0, 107.0], [427.0, 109.0], [424.0, 102.5], [420.0, 111.0], [428.0, 111.0], [419.0, 112.5], [422.0, 112.5], [423.0, 107.0], [421.0, 110.0], [431.0, 112.0], [429.0, 109.0], [444.0, 110.0], [435.0, 106.0], [445.0, 107.0], [437.0, 112.0], [442.0, 103.0], [436.0, 101.0], [443.0, 107.0], [439.0, 108.0], [433.0, 109.0], [447.0, 104.0], [462.0, 103.0], [450.0, 102.0], [449.0, 110.0], [463.0, 109.0], [461.0, 107.0], [460.0, 103.0], [459.0, 105.0], [457.0, 105.0], [456.0, 105.0], [466.0, 102.0], [471.0, 96.0], [478.0, 100.0], [465.0, 105.0], [467.0, 105.0], [468.0, 102.0], [470.0, 101.0], [472.0, 100.5], [476.0, 98.0], [482.0, 101.0], [488.0, 99.0], [485.0, 96.0], [489.0, 94.0], [495.0, 98.0], [493.0, 98.0], [492.0, 101.5], [486.0, 95.0], [481.0, 97.0], [487.0, 101.0], [480.0, 101.0], [491.0, 100.0], [510.0, 90.5], [498.0, 94.0], [506.0, 96.0], [507.0, 95.0], [505.0, 94.0], [496.0, 97.0], [497.0, 97.0], [509.0, 92.0], [501.0, 97.0], [500.0, 98.5], [502.0, 94.0], [503.0, 97.0], [508.0, 94.0], [504.0, 97.0], [511.0, 91.0], [541.0, 88.0], [535.0, 89.0], [539.0, 90.0], [540.0, 92.0], [536.0, 94.0], [537.0, 91.0], [524.0, 89.0], [527.0, 91.0], [525.0, 92.0], [526.0, 90.0], [513.0, 93.0], [512.0, 92.0], [514.0, 95.0], [528.0, 92.0], [531.0, 92.0], [530.0, 91.0], [529.0, 93.0], [543.0, 91.0], [533.0, 93.0], [532.0, 90.0], [534.0, 93.0], [518.0, 92.0], [519.0, 92.0], [523.0, 91.0], [521.0, 91.0], [520.0, 93.0], [522.0, 92.0], [548.0, 90.0], [544.0, 86.5], [554.0, 86.0], [555.0, 89.0], [559.0, 86.0], [557.0, 92.0], [558.0, 90.0], [556.0, 87.0], [574.0, 86.0], [562.0, 87.0], [567.0, 87.0], [566.0, 87.5], [565.0, 87.0], [563.0, 86.0], [560.0, 87.0], [575.0, 81.0], [553.0, 86.0], [552.0, 84.0], [546.0, 88.0], [545.0, 90.0], [570.0, 86.0], [572.0, 85.0], [573.0, 84.0], [549.0, 87.0], [550.0, 89.0], [569.0, 86.0], [568.0, 86.0], [602.0, 82.0], [580.0, 83.0], [597.0, 83.0], [577.0, 87.0], [579.0, 86.0], [578.0, 86.0], [600.0, 81.0], [583.0, 84.0], [601.0, 81.0], [607.0, 81.0], [593.0, 83.0], [596.0, 84.0], [594.0, 81.0], [592.0, 79.5], [604.0, 80.0], [587.0, 84.0], [585.0, 84.0], [584.0, 81.0], [588.0, 84.0], [590.0, 83.0], [591.0, 84.0], [598.0, 82.0], [599.0, 80.0], [582.0, 84.0], [581.0, 84.0], [608.0, 79.0], [609.0, 80.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 609.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 78.0, "minX": 151.0, "maxY": 284.0, "series": [{"data": [[151.0, 284.0], [181.0, 280.0], [226.0, 207.5], [232.0, 220.0], [239.0, 200.0], [268.0, 175.5], [276.0, 142.0], [302.0, 163.0], [300.0, 153.5], [312.0, 148.5], [305.0, 134.0], [334.0, 133.0], [336.0, 136.0], [350.0, 137.0], [344.0, 145.0], [355.0, 121.0], [367.0, 130.0], [352.0, 145.0], [364.0, 126.0], [361.0, 127.0], [363.0, 125.0], [356.0, 130.0], [365.0, 123.5], [370.0, 125.0], [369.0, 126.0], [373.0, 116.0], [368.0, 111.0], [391.0, 107.0], [390.0, 115.0], [394.0, 118.0], [404.0, 113.0], [413.0, 102.0], [401.0, 112.0], [415.0, 116.0], [430.0, 106.0], [427.0, 107.0], [424.0, 101.0], [420.0, 109.0], [428.0, 110.0], [419.0, 111.0], [422.0, 111.0], [423.0, 105.0], [421.0, 108.0], [431.0, 110.0], [429.0, 108.0], [444.0, 109.0], [435.0, 105.0], [445.0, 106.0], [437.0, 110.0], [442.0, 101.5], [436.0, 100.0], [443.0, 106.0], [439.0, 107.0], [433.0, 108.0], [447.0, 102.0], [462.0, 102.0], [450.0, 101.0], [449.0, 108.0], [463.0, 108.0], [461.0, 106.0], [460.0, 102.0], [459.0, 104.0], [457.0, 104.0], [456.0, 104.0], [466.0, 101.0], [471.0, 95.0], [478.0, 98.0], [465.0, 104.0], [467.0, 104.0], [468.0, 101.0], [470.0, 100.0], [472.0, 99.5], [476.0, 97.0], [482.0, 100.0], [488.0, 98.0], [485.0, 95.0], [489.0, 92.0], [495.0, 96.0], [493.0, 97.0], [492.0, 100.0], [486.0, 94.0], [481.0, 96.0], [487.0, 100.0], [480.0, 99.0], [491.0, 98.0], [510.0, 89.5], [498.0, 93.0], [506.0, 95.0], [507.0, 93.0], [505.0, 93.0], [496.0, 95.5], [497.0, 96.0], [509.0, 91.0], [501.0, 96.0], [500.0, 97.0], [502.0, 93.0], [503.0, 96.0], [508.0, 93.0], [504.0, 96.0], [511.0, 90.0], [541.0, 87.0], [535.0, 88.0], [539.0, 89.0], [540.0, 90.5], [536.0, 93.0], [537.0, 90.0], [524.0, 88.0], [527.0, 90.0], [525.0, 91.0], [526.0, 88.5], [513.0, 92.0], [512.0, 90.5], [514.0, 93.5], [528.0, 91.0], [531.0, 91.0], [530.0, 90.0], [529.0, 92.0], [543.0, 90.0], [533.0, 92.0], [532.0, 88.0], [534.0, 92.0], [518.0, 91.0], [519.0, 91.0], [523.0, 90.0], [521.0, 90.0], [520.0, 92.0], [522.0, 91.0], [548.0, 89.0], [544.0, 85.0], [554.0, 85.0], [555.0, 88.0], [559.0, 85.0], [557.0, 91.0], [558.0, 88.5], [556.0, 85.0], [574.0, 85.0], [562.0, 86.0], [567.0, 85.0], [566.0, 86.0], [565.0, 86.0], [563.0, 85.0], [560.0, 86.0], [575.0, 80.0], [553.0, 85.0], [552.0, 82.0], [546.0, 87.0], [545.0, 89.0], [570.0, 85.0], [572.0, 84.0], [573.0, 83.0], [549.0, 86.0], [550.0, 88.0], [569.0, 85.0], [568.0, 84.0], [602.0, 81.0], [580.0, 82.0], [597.0, 82.0], [577.0, 86.0], [579.0, 85.0], [578.0, 84.5], [600.0, 80.0], [583.0, 83.0], [601.0, 80.0], [607.0, 80.0], [593.0, 82.0], [596.0, 83.0], [594.0, 80.0], [592.0, 78.5], [604.0, 79.0], [587.0, 83.0], [585.0, 83.0], [584.0, 80.0], [588.0, 83.0], [590.0, 82.0], [591.0, 83.0], [598.0, 81.0], [599.0, 79.0], [582.0, 83.0], [581.0, 83.0], [608.0, 78.0], [609.0, 79.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 609.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.233333333333333, "minX": 1.58307384E12, "maxY": 539.8333333333334, "series": [{"data": [[1.5830739E12, 474.9], [1.58307402E12, 539.8333333333334], [1.58307384E12, 10.233333333333333], [1.58307414E12, 461.06666666666666], [1.58307396E12, 488.15], [1.58307408E12, 530.4333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307414E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.4, "minX": 1.58307384E12, "maxY": 539.8333333333334, "series": [{"data": [[1.5830739E12, 474.9], [1.58307402E12, 539.8333333333334], [1.58307384E12, 9.4], [1.58307414E12, 461.9], [1.58307396E12, 488.15], [1.58307408E12, 530.4333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58307414E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.4, "minX": 1.58307384E12, "maxY": 539.8333333333334, "series": [{"data": [[1.5830739E12, 474.9], [1.58307402E12, 539.8333333333334], [1.58307384E12, 9.4], [1.58307414E12, 461.9], [1.58307396E12, 488.15], [1.58307408E12, 530.4333333333333]], "isOverall": false, "label": "API call-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307414E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.4, "minX": 1.58307384E12, "maxY": 539.8333333333334, "series": [{"data": [[1.5830739E12, 474.9], [1.58307402E12, 539.8333333333334], [1.58307384E12, 9.4], [1.58307414E12, 461.9], [1.58307396E12, 488.15], [1.58307408E12, 530.4333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58307414E12, "title": "Total Transactions Per Second"}},
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

