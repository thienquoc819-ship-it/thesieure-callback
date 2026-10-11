<?php
// Nhận dữ liệu từ THESIEURE gửi về
$data = file_get_contents('php://input');
$get_data = $_GET;

// Ghi log để kiểm tra
file_put_contents('log.txt', date('Y-m-d H:i:s') . " - JSON: " . $data . " - GET: " . json_encode($get_data) . "\n", FILE_APPEND);

// Trả về phản hồi thành công cho THESIEURE
http_response_code(200);
echo json_encode(["status" => "success", "message" => "Da nhan duoc tien"]);
?>
