;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M891.113472 210.67776c16.929792 0 30.11584 2.491392 39.4496 7.468032 9.455616 4.97664 16.054272 11.071488 20.03968 18.418688 3.976192 7.340032 5.726208 15.05792 5.470208 23.395328-0.36352 8.337408-1.36192 15.434752-3.231744 21.402624l-11.328512 36.842496c-5.72416 18.540544-12.32384 38.951936-19.529728 61.229056-7.220224 22.27712-14.317568 44.306432-21.29408 66.20672-6.964224 21.906432-12.311552 39.200768-15.920128 51.774464-7.839744 26.50624-17.928192 44.925952-29.996032 55.256064s-27.003904 15.427584-44.55424 15.427584L779.348992 568.098816l-58.9824 0-77.284352 0-84.381696 0L333.449216 568.098816l13.56288 89.608192 457.859072 0c28.997632 0 43.557888 13.563904 43.557888 40.823808 0 13.314048-2.868224 24.764416-8.592384 34.345984-5.846016 9.583616-17.173504 14.4384-34.10432 14.4384l-43.557888 0-84.501504 0L573.261824 747.3152 466.978816 747.3152l-87.237632 0-49.901568 0c-12.201984 0-22.27712-2.988032-30.492672-8.962048s-14.937088-13.811712-20.417536-23.396352c-5.469184-9.583616-9.832448-20.035584-13.187072-31.362048-3.3536-11.328512-5.844992-21.907456-7.716864-31.860736-0.61952-3.980288-2.236416-13.56288-4.970496-28.870656l-9.965568-57.247744-13.186048-76.664832-14.560256-85.123072c-11.449344-67.081216-24.513536-141.75232-39.08608-224.013312l-68.072448 0c-9.07776 0-16.673792-2.491392-22.774784-7.468032-5.967872-4.97664-10.950656-10.949632-14.937088-17.92-3.974144-6.970368-6.720512-14.4384-8.204288-22.40512-1.49504-7.960576-2.24768-15.301632-2.24768-21.901312 0-13.314048 4.108288-24.270848 12.32384-32.857088 8.093696-8.58624 19.166208-12.94336 33.10592-12.94336l20.040704 0 18.035712 0 22.774784 0 30.869504 0c12.068864 0 21.779456 1.992704 29.120512 5.972992 7.2192 3.986432 12.944384 8.963072 17.173504 14.937088 4.22912 5.972992 7.341056 12.32384 9.091072 18.917376l4.593664 16.923648c1.130496 5.353472 2.369536 12.821504 3.6096 22.40512l3.608576 29.369344c1.871872 11.947008 3.6096 24.513536 5.481472 37.833728L891.113472 210.678784zM738.537472 776.187904c11.44832 0 22.519808 2.364416 33.10592 6.970368 10.573824 4.605952 19.663872 11.077632 27.247616 19.414016 7.596032 8.338432 13.698048 18.041856 18.169856 29.370368 4.605952 11.326464 6.842368 23.274496 6.842368 35.84 0 12.573696-2.236416 24.51968-6.842368 35.842048-4.471808 11.326464-10.573824 21.036032-18.169856 29.374464-7.583744 8.338432-16.673792 14.92992-27.247616 19.913728-10.586112 4.975616-21.6576 7.461888-33.10592 7.461888-11.582464 0-22.397952-2.486272-32.730112-7.461888-10.330112-4.983808-19.166208-11.57632-26.76224-19.913728s-13.683712-18.048-18.167808-29.374464c-4.608-11.322368-6.844416-23.268352-6.844416-35.842048 0-12.565504 2.236416-24.513536 6.844416-35.84 4.484096-11.328512 10.571776-21.031936 18.167808-29.370368 7.596032-8.336384 16.432128-14.808064 26.76224-19.414016C716.13952 778.55232 726.955008 776.187904 738.537472 776.187904M360.696832 774.194176c11.449344 0 22.398976 2.364416 32.608256 6.970368 10.330112 4.605952 19.408896 11.077632 27.259904 19.416064 7.960576 8.336384 13.928448 18.048 18.169856 29.36832 4.22912 11.328512 6.34368 23.274496 6.34368 35.848192 0 12.565504-2.11456 24.513536-6.34368 35.84-4.242432 11.322368-10.20928 21.031936-18.169856 29.370368-7.851008 8.336384-16.929792 14.936064-27.259904 19.91168-10.20928 4.977664-21.158912 7.468032-32.608256 7.468032-12.189696 0-23.15264-2.490368-33.227776-7.468032-9.954304-4.975616-18.911232-11.57632-26.76224-19.91168-7.83872-8.338432-13.928448-18.048-18.168832-29.370368-4.230144-11.326464-6.344704-23.274496-6.344704-35.84 0-12.573696 2.11456-24.51968 6.344704-35.848192 4.241408-11.32032 10.330112-21.031936 18.168832-29.36832 7.851008-8.338432 16.807936-14.810112 26.76224-19.416064C337.544192 776.558592 348.507136 774.194176 360.696832 774.194176"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M896.055296 448.088064 576.03584 448.088064 576.03584 128.068608 448.027648 128.068608 448.027648 448.088064 128.007168 448.088064 128.007168 576.096256 448.027648 576.096256 448.027648 896.116736 576.03584 896.116736 576.03584 576.096256 896.055296 576.096256Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jianhao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M46.501541 436.842742l930.396269 0 0 155.067251-930.396269 0 0-155.067251Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M672.321 671.382c-131.242 131.242-344.77 131.242-475.985 0-131.242-131.242-131.242-344.742 0-475.961 131.242-131.226 344.77-131.226 475.985 0 131.193 131.242 131.193 344.742 0 475.961v0zM269.731 268.832c-90.763 90.747-90.763 238.455-0.003 329.241 90.747 90.747 238.485 90.747 329.241 0 90.747-90.747 90.747-238.455 0-329.198s-238.485-90.834-329.198-0.003v0zM931.479 828.993c24.934 24.934 24.934 65.335 0 90.292l-11.306 11.306c-24.934 24.954-65.335 24.954-90.292 0l-231.361-231.413c-24.934-24.954-24.934-65.335 0-90.292l11.306-11.306c24.934-24.954 65.378-24.954 90.292 0l231.361 231.413zM931.479 828.993z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M87.386768 151.779845l44.695968 0c12.33084 0 22.347984 10.039657 22.347984 22.347984l0 44.695968c0 12.353352-10.017144 22.347984-22.347984 22.347984l-44.695968 0c-12.33084 0-22.347984-9.995655-22.347984-22.347984l0-44.695968C65.038784 161.819502 75.055928 151.779845 87.386768 151.779845z"  ></path>'+
      ''+
      '<path d="M355.5636 151.779845l581.047586 0c12.331863 0 22.349007 10.039657 22.349007 22.347984l0 44.695968c0 12.353352-10.017144 22.347984-22.349007 22.347984L355.5636 241.171782c-12.33084 0-22.347984-9.995655-22.347984-22.347984l0-44.695968C333.214593 161.819502 343.23276 151.779845 355.5636 151.779845z"  ></path>'+
      ''+
      '<path d="M87.386768 777.524422l44.695968 0c12.33084 0 22.347984 10.04068 22.347984 22.347984L154.43072 844.568375c0 12.351306-10.017144 22.347984-22.347984 22.347984l-44.695968 0c-12.33084 0-22.347984-9.996678-22.347984-22.347984l0-44.696991C65.038784 787.56408 75.055928 777.524422 87.386768 777.524422z"  ></path>'+
      ''+
      '<path d="M355.5636 777.524422l581.047586 0c12.331863 0 22.349007 10.04068 22.349007 22.347984L958.960193 844.568375c0 12.351306-10.017144 22.347984-22.349007 22.347984L355.5636 866.916359c-12.33084 0-22.347984-9.996678-22.347984-22.347984l0-44.696991C333.214593 787.56408 343.23276 777.524422 355.5636 777.524422z"  ></path>'+
      ''+
      '<path d="M87.386768 464.652646l44.695968 0c12.33084 0 22.347984 10.039657 22.347984 22.347984l0 44.695968c0 12.351306-10.017144 22.347984-22.347984 22.347984l-44.695968 0c-12.33084 0-22.347984-9.996678-22.347984-22.347984l0-44.695968C65.038784 474.691279 75.055928 464.652646 87.386768 464.652646z"  ></path>'+
      ''+
      '<path d="M355.5636 464.652646l581.047586 0c12.331863 0 22.349007 10.039657 22.349007 22.347984l0 44.695968c0 12.351306-10.017144 22.347984-22.349007 22.347984L355.5636 554.044582c-12.33084 0-22.347984-9.996678-22.347984-22.347984l0-44.695968C333.214593 474.691279 343.23276 464.652646 355.5636 464.652646z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhuye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M811.255172 513.553655c-19.508966 0-35.310345 15.819034-35.310345 35.310345l0 312.425931c-2.577655 47.510069-15.607172 57.661793-61.281103 59.780414l-399.730759 0.300138c-52.365241-1.465379-66.59531-10.699034-68.64331-66.59531L246.289655 548.864c0-19.49131-15.819034-35.310345-35.310345-35.310345-19.508966 0-35.310345 15.819034-35.310345 35.310345l0 372.135724c0 46.309517 34.957241 69.208276 81.284414 69.208276l41.931034 0 0 0.370759 421.835034-0.282483 0-0.088276 41.931034 0c46.309517 0 83.826759-22.898759 83.826759-69.208276l0-44.50869 0.105931 0L846.583172 548.864C846.565517 529.355034 830.746483 513.553655 811.255172 513.553655zM1003.572966 508.345379 542.614069 48.728276c-1.235862-2.312828-2.842483-4.519724-4.837517-6.532414-8.509793-8.509793-18.891034-11.158069-29.184-9.551448-7.927172 0.441379-15.730759 3.672276-22.580966 10.522483-0.229517 0.229517-0.353103 0.512-0.564966 0.759172-1.235862 1.05931-2.507034 2.01269-3.672276 3.195586L18.555586 509.016276c-16.366345 16.366345-18.025931 29.784276-1.641931 46.132966 16.366345 16.384 33.068138 18.025931 49.434483 1.659586l445.086897-437.459862L959.046621 556.137931c16.384 16.384 33.068138 14.724414 49.452138-1.659586C1024.847448 538.129655 1019.956966 524.729379 1003.572966 508.345379zM740.634483 142.795034l105.931034 0 0 105.931034c0 19.49131 15.801379 35.310345 35.310345 35.310345 19.49131 0 35.310345-15.819034 35.310345-35.310345l0-141.241379c0-19.49131-15.819034-35.310345-35.310345-35.310345l-141.241379 0c-19.508966 0-35.310345 15.819034-35.310345 35.310345S721.125517 142.795034 740.634483 142.795034z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-circle" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.998977 111.702058c-221.079164 0-400.296919 179.218778-400.296919 400.298965 0 221.079164 179.218778 400.296919 400.296919 400.296919 221.080188 0 400.298965-179.218778 400.298965-400.296919C912.297942 290.920836 733.079164 111.702058 511.998977 111.702058L511.998977 111.702058z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gouwuche1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M928.930761 209.035874c-6.482645-7.765871-16.08228-12.266371-26.206872-12.266371L318.779324 196.769502c-18.8493 0-34.132378 15.283078-34.132378 34.132378s15.283078 34.132378 34.132378 34.132378l543.021527 0-43.965328 240.974283-518.791683 65.435315L223.449141 184.154183c-2.191922-11.266601-9.891278-20.649296-20.490683-25.032116l-94.071516-38.764885c-17.415648-7.166213-37.390585 1.116427-44.564985 18.565844-7.182586 17.415648 1.124614 37.382399 18.549471 44.564985l77.096912 31.765471 99.93813 512.014326c3.125177 16.033162 17.165961 27.598568 33.498952 27.598568l536.529673 0c18.8493 0 34.132378-15.283078 34.132378-34.132378s-15.283078-34.132378-34.132378-34.132378L321.520761 686.60162l-9.369392-48.00227 539.049053-67.99358c14.766308-1.866511 26.632567-13.08297 29.299303-27.732621l55.797817-305.838593C938.122097 227.068576 935.422615 216.819141 928.930761 209.035874z"  ></path>'+
      ''+
      '<path d="M758.267846 799.170418c-28.28316 0-51.208289 22.922059-51.208289 51.198056 0 28.275997 22.925129 51.198056 51.208289 51.198056 28.261671 0 51.187823-22.922059 51.187823-51.198056C809.455669 822.092477 786.529517 799.170418 758.267846 799.170418z"  ></path>'+
      ''+
      '<path d="M397.200394 850.368474m-51.198056 0a50.032 50.032 0 1 0 102.396111 0 50.032 50.032 0 1 0-102.396111 0Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M290.133333 11.377778c14.222222 0 28.444444 5.688889 39.822222 17.066667l443.733333 443.733333c11.377778 11.377778 17.066667 25.6 17.066667 39.822222s-5.688889 28.444444-17.066667 39.822222L329.955556 995.555556c-22.755556 22.755556-56.888889 22.755556-79.644444 0-22.755556-22.755556-22.755556-56.888889 0-79.644444L651.377778 512l-401.066667-401.066667c-22.755556-22.755556-22.755556-56.888889 0-79.644444C261.688889 17.066667 275.911111 11.377778 290.133333 11.377778z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yuan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512s190.933333 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667S747.733333 85.333333 512 85.333333zM512 853.333333c-188.586667 0-341.333333-152.746667-341.333333-341.333333S323.413333 170.666667 512 170.666667s341.333333 152.746667 341.333333 341.333333S700.586667 853.333333 512 853.333333z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jifen" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M509.092 500.924c258.849 0 454.035-83.601 454.035-194.469 0-110.855-195.186-194.456-454.036-194.456-258.848 0-454.048 83.602-454.048 194.457C55.043 417.324 250.243 500.924 509.092 500.924zM509.092 161.072c238.65 0 404.963 76.617 404.963 145.384 0 68.768-166.313 145.396-404.963 145.396-238.663 0-404.977-76.628-404.977-145.396C104.116 237.69 270.43 161.072 509.092 161.072zM509.083 706.919c258.143 0 452.807-83.079 452.807-193.229 0-29.087-14.057-56.157-38.801-80.437-0.159-0.164-0.285-0.343-0.448-0.502-0.185-0.18-0.306-0.371-0.488-0.548l-0.123 0.135c-3.98-3.648-9.183-6.003-15.007-6.003-12.359 0-22.376 10.015-22.376 22.373 0 6.542 2.915 12.292 7.389 16.385l-0.089 0.097c14.934 15.014 23.352 33.354 23.352 48.5 0 69.361-166.817 146.64-406.215 146.64-239.387 0-406.205-77.278-406.205-146.64 0-17.279 4.858-32.067 23.9-48.895 0.229-0.218 0.46-0.409 0.681-0.637 0.147-0.126 0.257-0.25 0.406-0.379l-0.091-0.087c3.658-3.982 6.02-9.195 6.02-15.029 0-12.358-10.017-22.373-22.375-22.373-6.178 0-11.77 2.505-15.816 6.551l-0.132-0.128C70.411 457.122 56.292 484.4 56.292 513.69 56.291 623.84 250.953 706.919 509.083 706.919zM922.87 637.83c-0.18-0.177-0.302-0.368-0.485-0.543l-0.122 0.134c-3.98-3.648-9.183-6.005-15.009-6.005-12.355 0-22.373 10.016-22.373 22.374 0 6.541 2.914 12.293 7.389 16.384l-0.09 0.098c14.935 15.015 23.351 33.355 23.351 48.499 0 69.364-166.815 146.64-406.214 146.64-239.385 0-406.204-77.277-406.204-146.64 0-17.279 4.858-32.067 23.898-48.895 0.229-0.217 0.461-0.409 0.68-0.637 0.147-0.127 0.258-0.25 0.406-0.38l-0.091-0.086c3.658-3.983 6.02-9.196 6.02-15.029 0-12.359-10.017-22.374-22.373-22.374-6.179 0-11.771 2.505-15.817 6.551l-0.131-0.127c-25.063 24.407-39.179 51.688-39.179 80.977 0 110.151 194.661 193.229 452.792 193.229 258.143 0 452.804-83.079 452.804-193.229 0-29.084-14.053-56.156-38.794-80.432C923.164 638.169 923.036 637.991 922.87 637.83z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon3" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M958.845071 911.952065c0 41.081651-34.984792 47.059805-75.981509 47.059805L512.305969 959.01187 141.218302 959.01187c-40.980343 0-75.824943-5.978155-75.824943-47.059805 0 0-31.085996-300.094776 215.492936-418.698011 42.384319 89.953731 121.942283 164.326603 231.420697 164.326603 89.696882 0 182.172039-75.263148 224.556359-165.214832C983.437166 610.963942 958.845071 911.952065 958.845071 911.952065zM760.713548 585.208349c-63.049988 83.468017-157.458171 137.492444-248.40758 137.492444-101.18861 0-192.838983-49.699935-255.924787-136.024-120.999818 96.942913-123.656321 261.683954-121.893164 307.149449 2.00261 0.033769 4.247744 0.064468 6.730285 0.064468l371.087667 0 370.557594 0c2.381234 0 4.51892-0.031722 6.457062-0.064468C889.729947 846.227154 881.888352 681.46053 760.713548 585.208349zM512.288572 608.80272c-123.518175 0-225.563292-164.066683-225.563292-299.649638 0-135.609561 100.110045-245.531066 223.613894-245.531066 123.501802 0 223.609801 109.921505 223.609801 245.531066C733.948975 444.736037 635.792421 608.80272 512.288572 608.80272zM510.339174 128.74113c-84.629469 0-153.47137 80.921008-153.47137 180.410929 0 109.60121 82.796728 234.529501 155.420769 234.529501 72.214718 0 151.517879-122.732276 151.517879-234.529501C663.806451 209.662137 594.968643 128.74113 510.339174 128.74113z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wujiaoxing" viewBox="0 0 1131 1024">'+
      ''+
      '<path d="M918.192465 442.160887c12.279404-11.972419 16.679524-26.707705 12.177076-40.624363-4.502448-13.916658-16.781853-23.22854-33.768362-25.684421l-219.392026-31.824123c-5.321075-0.818627-14.4283-7.367643-16.781853-12.177076L562.396722 133.12921c-7.572299-15.349256-20.261017-24.149495-34.893974-24.149495s-27.321675 8.80024-34.893974 24.149495l-98.132907 198.721695c-2.353553 4.809433-11.460777 11.460777-16.781853 12.177076l-219.289697 31.824123c-16.884181 2.455881-29.163585 11.870091-33.768362 25.684421-4.502448 13.916658-0.102328 28.754272 12.177076 40.624363l158.711302 154.720496c3.888478 3.78615 7.367643 14.530629 6.446687 19.749375l-37.452183 218.47107c-2.251224 13.302688 0.511642 25.582093 7.981613 34.382332 6.753672 7.981613 16.372539 12.381733 27.117018 12.381733 7.060658 0 14.223643-1.944239 21.386629-5.62806l196.163486-103.146997c1.739582-0.920955 5.730389-1.841911 10.437494-1.841911 4.707105 0 8.595583 0.920955 10.335165 1.841911l196.163486 103.146997c7.162986 3.78615 14.325972 5.62806 21.386629 5.62806 10.744479 0 20.363346-4.40012 27.117018-12.381733 7.469971-8.80024 10.232837-20.977316 7.981613-34.382332L753.136804 616.630758c-0.920955-5.321075 2.558209-15.963226 6.446687-19.749375L918.192465 442.160887 918.192465 442.160887z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-right" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.000512 68.191078c-245.10844 0-443.809945 198.701504-443.809945 443.808922 0 245.10844 198.701504 443.807898 443.809945 443.807898 245.107417 0 443.806875-198.699458 443.806875-443.807898C955.807387 266.892583 757.107929 68.191078 512.000512 68.191078L512.000512 68.191078zM461.566866 708.701964l-33.621748 33.620725L226.19723 540.584012l67.25066-67.245544 134.490064 134.490064L730.55211 305.2154l67.248613 67.25066L461.566866 708.701964 461.566866 708.701964zM461.566866 708.701964"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mofang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M290.306439 218.184864c0-2.815969-1.087988-90.495005 20.671773-117.438708 22.015758-27.519697 85.055064-63.039307 85.055064-63.039307s71.935209-44.735508 85.183063-36.671597C494.656191 8.971165 492.352216 95.626212 492.352216 95.626212s-0.639993 85.631058-14.52784 110.334786C464.000528 230.600727 392.00132 273.672253 392.00132 273.672253s-63.039307 41.151547-84.671069 40.319556C286.082485 313.223818 290.242439 221.192831 290.306439 218.184864zM334.145956 656.388043c0.511994 15.551829 77.055152 56.127383 77.055152 56.127383s75.263172 41.343545 103.358863 41.343545c28.351688 0 101.054888-41.599542 101.054888-41.599542s66.815265-34.815617 76.735156-54.015406c9.727893-18.943792-72.639201-60.415335-75.263172-61.887319C614.654871 594.948719 538.687706 551.173201 504.640081 556.805139 469.760465 562.693074 407.937145 600.132662 407.937145 600.132662S333.633962 640.900214 334.145956 656.388043zM302.722302 590.980763c21.631762 0.831991 84.607069-40.319556 84.607069-40.319556s71.935209-43.071526 85.823056-67.711255C487.040275 458.374222 487.744267 372.679164 487.744267 372.679164S489.856244 286.088117 476.608389 278.024205C463.296536 269.960294 391.361327 314.631803 391.361327 314.631803S328.450019 350.34341 306.306263 377.671109C284.610501 404.678812 285.63449 492.293848 285.63449 495.237816 285.506491 498.117784 281.474536 590.212771 302.722302 590.980763zM787.964964 353.415376c13.951847 24.639729 85.951055 67.711255 85.951055 67.711255s62.975307 41.215547 84.607069 40.319556c21.183767-0.831991 17.151811-92.798979 17.087812-95.742947 0-2.879968 1.215987-90.431005-20.607773-117.566707-22.143756-27.391699-85.119064-63.039307-85.119064-63.039307s-71.935209-44.735508-85.183063-36.607597c-13.375853 7.999912-11.199877 94.590959-11.199877 94.590959S774.269115 328.903646 787.964964 353.415376zM717.821736 377.671109c-22.207756-27.391699-85.119064-63.103306-85.119064-63.103306S560.767464 269.960294 547.45561 278.024205C534.207756 286.088117 536.255733 372.679164 536.255733 372.679164s0.831991 85.631058 14.655839 110.270787c13.887847 24.639729 85.759057 67.711255 85.759057 67.711255s63.103306 41.151547 84.671069 40.319556c21.247766-0.831991 17.151811-92.926978 17.023813-95.806946C738.36551 492.293848 739.517497 404.678812 717.821736 377.671109zM546.303623 205.960998c13.759849 24.639729 85.759057 67.711255 85.759057 67.711255s63.039307 41.151547 84.671069 40.319556c21.183767-0.767992 17.151811-92.798979 17.087812-95.806946 0-2.815969 1.023989-90.495005-20.671773-117.438708-22.079757-27.519697-85.119064-63.039307-85.119064-63.039307S556.031516-7.092658 542.783661 0.971253C529.407809 8.971165 531.647784 95.626212 531.647784 95.626212S532.351776 181.25727 546.303623 205.960998zM231.299088 630.532328c13.823848-24.703728 14.591839-110.334786 14.591839-110.334786s2.175976-86.591047-11.071878-94.718958C221.379197 417.478671 149.443988 462.15018 149.443988 462.15018S86.596679 497.733789 64.452923 525.189487c-21.759761 27.071702-20.735772 114.622739-20.735772 117.502707C43.653152 645.636162 39.685195 737.667149 60.804963 738.56314c21.695761 0.703992 84.671069-40.383556 84.671069-40.383556S217.47524 654.980059 231.299088 630.532328zM860.924162 727.939256c-2.431973-1.343985-78.335138-45.247502-112.510762-39.423566-34.751618 5.695937-96.638937 43.263524-96.638937 43.263524s-74.303183 40.703552-73.855188 56.255381c0.639993 15.48783 77.119152 56.127383 77.119152 56.127383s75.263172 41.343545 103.294864 41.343545c28.351688 0 101.118888-41.727541 101.118888-41.727541s66.815265-34.815617 76.671157-54.015406C945.979226 770.882784 863.676132 729.283242 860.924162 727.939256zM65.476912 461.446188c21.631762 0.831991 84.671069-40.319556 84.671069-40.319556S222.083189 378.119104 235.971036 353.415376c13.823848-24.57573 14.655839-110.398786 14.655839-110.398786S252.738852 156.553542 239.554997 148.48963C226.115145 140.425719 154.179936 185.161227 154.179936 185.161227S91.204629 220.744836 69.124872 248.136534C47.365111 275.272236 48.453099 362.823273 48.453099 365.703241 48.3251 368.647209 44.293145 460.678196 65.476912 461.446188zM980.282849 642.692194c0.063999-2.879968 1.087988-90.431005-20.671773-117.502707-22.079757-27.455698-85.119064-63.039307-85.119064-63.039307s-71.80721-44.671509-85.183063-36.671597c-13.247854 8.127911-11.199877 94.718958-11.199877 94.718958s0.831991 85.631058 14.655839 110.334786c13.823848 24.51173 85.759057 67.711255 85.759057 67.711255s63.039307 41.087548 84.735068 40.383556C984.506802 737.667149 980.346848 645.636162 980.282849 642.692194zM445.312734 796.6745c9.663894-18.879792-72.639201-60.351336-75.327171-61.82332-2.431973-1.343985-78.335138-45.183503-112.510762-39.487566-34.687618 5.823936-96.638937 43.263524-96.638937 43.263524s-74.239183 40.831551-73.727189 56.38338 77.055152 56.063383 77.055152 56.063383 75.135174 41.343545 103.422862 41.343545 101.054888-41.599542 101.054888-41.599542S435.328843 815.938288 445.312734 796.6745zM613.886879 866.433733c-2.431973-1.343985-78.271139-45.183503-112.446763-39.423566-34.815617 5.823936-96.766936 43.199525-96.766936 43.199525s-74.175184 40.89555-73.66319 56.447379c0.511994 15.551829 77.055152 56.063383 77.055152 56.063383S483.136318 1024 511.360007 1024s101.054888-41.599542 101.054888-41.599542 66.815265-34.815617 76.671157-54.015406C698.813945 909.44126 616.51085 867.841717 613.886879 866.433733z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangzuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M671.968176 911.99957c-12.287381 0-24.576482-4.67206-33.951566-14.047144L286.048434 545.984249c-18.751888-18.719204-18.751888-49.12028 0-67.872168L638.016611 126.111222c18.751888-18.751888 49.12028-18.751888 67.872168 0 18.751888 18.719204 18.751888 49.12028 0 67.872168l-318.016611 318.047574L705.888778 830.047574c18.751888 18.751888 18.751888 49.12028 0 67.872168C696.544658 907.32751 684.255557 911.99957 671.968176 911.99957z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lajixiang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M944 192l-188.8 0 0-44.8c0-54.4-44.8-99.2-99.2-99.2l-294.4 0c-54.4 0-99.2 44.8-99.2 99.2l0 44.8-179.2 0c-12.8 0-25.6 9.6-25.6 25.6 0 12.8 9.6 25.6 25.6 25.6l60.8 0 0 0 0 633.6c0 54.4 44.8 99.2 99.2 99.2l550.4 0c54.4 0 99.2-44.8 99.2-99.2l0-630.4 0-3.2 51.2 0c12.8 0 25.6-9.6 25.6-25.6C966.4 204.8 960 192 944 192zM316.8 147.2c0-25.6 22.4-48 48-48l294.4 0c25.6 0 48 22.4 48 48l0 44.8-390.4 0L316.8 147.2zM841.6 867.2c0 28.8-16 57.6-41.6 57.6l-550.4 0c-25.6 0-54.4-19.2-54.4-44.8l3.2-636.8 643.2 0 0 0L841.6 867.2zM368 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C390.4 393.6 384 380.8 368 380.8zM528 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C550.4 393.6 544 380.8 528 380.8zM688 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C710.4 393.6 704 380.8 688 380.8z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
