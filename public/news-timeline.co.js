(function () {
    'use strict';

    function ready(fn) {
      if (document.readyState != 'loading'){
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }

    ready(() => {
      const timeline = new TL.Timeline('timeline-embed',
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0d7Ijnow9m2B7rdCxJA4Oc83kHNYX7VYrF_Kfypx2zWLdXuagWRV9eaJWbcFVpsLMS-UGKv_3IowR/pubhtml?gid=0&single=true', {
          language: 'es',
          start_at_end: true,
          language: 'es',
        });
    });

}());
